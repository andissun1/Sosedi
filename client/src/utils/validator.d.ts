// validator.d.ts
import { InitialState } from '../pages/Auth/validateSchemes';

export function validator(
  allValues: InitialState,
  scheme: typeof import('../pages/Auth/validateSchemes').schemes,
): Partial<Record<keyof InitialState, string>>;
