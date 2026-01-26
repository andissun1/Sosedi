import { isAxiosError } from 'axios';

export function returnError(error: unknown) {
  if (isAxiosError(error)) {
    return error.response?.data || 'Ошибка авторизации';
  } else if (error instanceof Error) {
    return error.message;
  }
}
