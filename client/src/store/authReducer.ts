import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { request } from '../utils/request';
import type { ThunkResult, ThunkWithRoutes } from './types';
import { isAxiosError } from 'axios';
import { returnError } from '../utils/returnError';
import { goToErrorPage } from './errorsReducer';

interface InitialState extends User {
  isLoadingUser: boolean;
}

interface User {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  repeatPassword?: string;
}

const initialState: InitialState = {
  isLoadingUser: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return { ...state, ...action.payload };
    },
    removeUser() {
      return initialState;
    },
    setIsLoadingUser(state, action: PayloadAction<boolean>) {
      state.isLoadingUser = action.payload;
    },
  },
  selectors: {
    // numbers: (state) => state.numbers,
    // board: (state) => state.board,
  },
});

// Экспортирую элементы и переименовываю
export const {
  actions: authActions,
  selectors: authSelectors,
  reducer: authReducer,
} = authSlice;

// Асинхронные операции
export const authorize =
  (email: string, password: string): ThunkWithRoutes =>
  async (dispatch, __, { routes }) => {
    try {
      dispatch(authActions.setIsLoadingUser(true));
      const { data } = await request.post(`/api/auth/login`, {
        email,
        password,
      });

      console.log(data);

      localStorage.setItem('token', data.accessToken);
      dispatch(me);
      dispatch(authActions.setUser(data));
      dispatch(authActions.setIsLoadingUser(false));

      routes.navigate('/');
    } catch (error) {
      return returnError(error);
    }
  };

export const logout: ThunkWithRoutes = async (dispatch) => {
  try {
    dispatch(authActions.setIsLoadingUser(true));

    await request.post(`/api/auth/logout`);
    localStorage.removeItem('token');
    dispatch(authActions.removeUser());
    dispatch(authActions.setIsLoadingUser(false));
  } catch (error) {
    if (isAxiosError(error)) {
      dispatch(goToErrorPage(error.response?.data?.message));
    } else if (error instanceof Error) {
      dispatch(
        goToErrorPage(`Произошла ошибка при выходе из аккаунта: ${error.message}`),
      );
    }
  }
};

export const register =
  (formData: UserFormData): ThunkWithRoutes =>
  async (dispatch, __, { routes }) => {
    try {
      dispatch(authActions.setIsLoadingUser(true));

      // console.log(formData);

      const { data } = await request.post(`/api/auth/register`, {
        ...formData,
        roleId: 1,
      });

      localStorage.setItem('token', data.accessToken);
      console.log(data);

      dispatch(authActions.setUser(data));
      dispatch(authActions.setIsLoadingUser(false));

      routes.navigate('/');
    } catch (error) {
      console.log(error);

      console.log(returnError(error));

      // return returnError(error);
    }
  };

export const resetPassword =
  (email: string): ThunkResult =>
  async (dispatch) => {
    try {
      dispatch(authActions.setIsLoadingUser(true));
      const { data } = await request.post(`/api/auth/resetPassword`, { email });
      dispatch(authActions.setIsLoadingUser(false));
      return data;
    } catch (error) {
      return returnError(error);
    }
  };

// При обновлении приложения отправляем запрос на авторизацию
export const me: ThunkResult = async (dispatch) => {
  try {
    dispatch(authActions.setIsLoadingUser(true));
    const { data } = await request.get<User>(`/api/auth/@me`);
    dispatch(authActions.setUser(data));
    dispatch(authActions.setIsLoadingUser(false));
    console.log(data);
  } catch (error) {
    dispatch(authActions.setIsLoadingUser(false));
    console.log(error);

    // Приходит регулярно сообщение о статусе авторизации
    console.log(returnError(error));
  }
};
