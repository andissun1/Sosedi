import { Link } from 'react-router-dom';
import style from './Header.module.css';

export const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.headerContent}>
        <img src="/public/images/logo.png" alt="logo" />
        <nav>
          <a href={'#aboutUs'}>О нас</a>
          <a href="#RentBlock">Зал</a>
          <a href="#cubic">Клубы в клубе</a>
          <a href="#feedbacks">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <div className={style.actionBar}>
          <div className={style.actionButton}></div>
          <div className={style.actionButton}></div>
          <Link className={style.actionButton} to={'/auth/login'}>
            A
          </Link>
        </div>
      </div>
    </div>
  );
};
