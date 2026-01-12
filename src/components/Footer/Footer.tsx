import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.Footer}>
      <h2>
        <img src="/Sosedi/images/logo.jpg" className={style.logo} /> Будем рады вас видеть
      </h2>
      <div className={style.contacts}>
        <a
          href="https://yandex.ru/maps/org/taym_kafe_sosedi/9648833084/?ll=37.927635%2C59.095649&z=16"
          target="blank"
        >
          ул. Годовикова 19a 📍
        </a>
        <p>+7 909 990 99 00</p>
        <p>Sosedi@mail.ru</p>
      </div>
    </div>
  );
};
