import { Link } from 'react-router';
import { FormInput } from '../FormInput/FormInput';
import style from './RegisterForm.module.css';
import type { UserFormData } from '../../store/authReducer';
import type { ChangeEvent } from 'react';

interface RegisterFormProps {
  formData: UserFormData;
  error: {
    [key: string]: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RegisterForm = ({ formData, error, handleChange }: RegisterFormProps) => (
  <>
    <h2>Регистрация</h2>
    <FormInput
      name="name"
      value={formData.name}
      label="Имя или никнейм"
      onChange={handleChange}
      type="text"
      error={error?.name}
    />

    <FormInput
      name="phone"
      value={formData.phone}
      label="Контактный телефон"
      onChange={handleChange}
      type="tel"
      error={error?.phone}
    />

    <FormInput
      name="email"
      value={formData.email}
      label="Email"
      onChange={handleChange}
      type="text"
      error={error?.email}
    />

    <FormInput
      name="password"
      value={formData.password}
      label="Пароль"
      onChange={handleChange}
      type="new-password"
      error={error?.password}
    />

    <FormInput
      name="repeatPassword"
      value={formData.repeatPassword}
      label="Повторите пароль"
      onChange={handleChange}
      type="new-password"
      error={error?.repeatPassword}
    />

    <div className={style.buttons}>
      <button type="submit" disabled={Object.keys(error).length !== 0}>
        Зарегистрироваться
      </button>
      <Link to={'/auth/login'} children="У меня уже есть аккаунт" />
    </div>
  </>
);
