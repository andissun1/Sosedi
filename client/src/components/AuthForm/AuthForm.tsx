import { Link } from 'react-router';
import { FormInput } from '../FormInput/FormInput';
import style from './AuthForm.module.css';
import type { UserFormData } from '../../store/authReducer';
import type { ChangeEvent } from 'react';

interface RegisterFormProps {
  formData: UserFormData;
  error: {
    [key: string]: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AuthForm = ({ formData, error, handleChange }: RegisterFormProps) => {
  return (
    <>
      <h2>Вход в личный кабинет</h2>
      <FormInput
        name="email"
        value={formData.email}
        label="Телефон или Email"
        onChange={handleChange}
        type="text"
        error={error?.email}
      />

      <FormInput
        name="password"
        value={formData.password}
        label="Пароль"
        onChange={handleChange}
        type="current-password"
        error={error?.password}
      />
      <div className={style.buttons}>
        <button type="submit" disabled={Object.keys(error).length !== 0}>
          Войти
        </button>
        <Link to={'/auth/resetPassword'} children="Восстановить пароль" />
        <Link to={'/auth/register'} children="Зарегистрироваться" />
      </div>
    </>
  );
};
