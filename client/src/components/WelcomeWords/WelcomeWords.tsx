import style from './WelcomeWords.module.css';

export const WelcomeWords = () => {
  return (
    <div className={style.WelcomeWords} id="contacts">
      <h1>Мы вас ждём!</h1>
      <div className={style.wrapper}>
        <div className={style.content}>
          <ul className={style.stars}>
            <li>Вологодская обл., г.Череповец, ул. Годовикова, 19А</li>
            <li>8 (921) 235-67-49</li>
          </ul>
        </div>
        <div className={style.image}></div>
      </div>
    </div>
  );
};
