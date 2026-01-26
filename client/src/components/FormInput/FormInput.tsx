import type { ChangeEvent } from 'react';
import style from './FormInput.module.css';

type FormInputProps = {
  name: string;
  label?: string;
  type?: string;
  error?: string;
  value?: string;
  children?: React.ReactNode;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = ({
  name,
  label,
  error,
  value,
  children,
  required,
  ...props
}: FormInputProps) => {
  return (
    <div className={`${style.formInput} ${required ? style.required : ''}`}>
      {label && <label htmlFor={name}>{label}:</label>}
      <input name={name} value={value || ''} {...props} />
      {children}
      {value && error && <span>{error}</span>}
    </div>
  );
};
