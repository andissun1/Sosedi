import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { routes } from '../router/routes';

interface ThunkRouter {
  navigate: (to: string) => void;
  routes: typeof routes;
}

// Типизация для ThunkAction
export type ThunkResult = ThunkAction<void, RootState, unknown, UnknownAction>;
export type ThunkWithRoutes = ThunkAction<void, RootState, ThunkRouter, UnknownAction>;
