import { Link } from 'react-router';
import { FormInput } from '../FormInput/FormInput';
import style from './ResetPasswordForm.module.css';
import type { UserFormData } from '../../store/authReducer';
import type { ChangeEvent } from 'react';

interface ResetPasswordFormProps {
  formData: UserFormData;
  error: {
    [key: string]: string;
  };
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ResetPasswordForm = ({
  formData,
  error,
  handleChange,
}: ResetPasswordFormProps) => {
  return (
    <>
      <h2>Восстановление пароля</h2>
      <FormInput
        name="email"
        value={formData.email}
        label="Email"
        onChange={handleChange}
        type="text"
        error={error?.email}
      />
      <div className={style.buttons}>
        <button type="submit" disabled={Object.keys(error).length !== 0}>
          Восстановить пароль
        </button>
        <Link to={'/auth/login'} children="Я вспомнил(-а) пароль!" />
      </div>
    </>
  );
};
