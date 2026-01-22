import style from './WelcomeWords.module.css';

export const WelcomeWords = () => {
  return (
    <div className={style.WelcomeWords}>
      <h1>Мы вас ждём!</h1>
      <div className={style.wrapper}>
        <div className={style.content}>
          <p>Адрес</p>
        </div>
        <div className={style.image}></div>
      </div>
    </div>
  );
};
