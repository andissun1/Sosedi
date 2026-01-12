import { Link } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.Header}>
      <img src="/public/images/logo.jpg" alt="logo" />
      <nav>
        <a href={'#main'}>Главная</a>
        <a href="#latestNews">Новости</a>
        <a href="#about">О нас</a>
        <Link to={'/auth/login'}>Вход</Link>
      </nav>
    </div>
  );
};
