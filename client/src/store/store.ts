import { configureStore } from '@reduxjs/toolkit';
import { authReducer, me } from './authReducer';
import { routes } from '../router/routes';
import { errorReducer } from './errorsReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { routes } },
      // Отключение сериализация для вызова модалки. Есть необходимость функции хранить в контексте.
      serializableCheck: {
        ignoredActions: ['modal/setModalParams'],
        ignoredActionPaths: ['modal'],
        ignoredPaths: ['modal'],
      },
    }),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

store.dispatch(me);
