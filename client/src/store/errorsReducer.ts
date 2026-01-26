import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ThunkWithRoutes } from './types';

interface ErrorState {
  error: string | null;
}

const initialState: ErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = null;
    },
  },
});

export const { reducer: errorReducer, actions: errorActions } = errorSlice;

export const goToErrorPage =
  (message: string): ThunkWithRoutes =>
  (dispatch, __, { routes }) => {
    dispatch(errorActions.setError(message));
    routes.navigate('/error');
  };
