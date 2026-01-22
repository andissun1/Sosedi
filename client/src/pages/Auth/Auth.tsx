import style from './Auth.module.css';
import { Link } from 'react-router-dom';

export const Auth = () => {
  return (
    <div className={style.Auth}>
      <h1>Страница авторизации и личного кабинета</h1>
      <Link to={'/'}>Вернуться</Link>
    </div>
  );
};
