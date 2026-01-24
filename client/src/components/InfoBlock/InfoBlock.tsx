import style from './InfoBlock.module.css';

export const InfoBlock = () => {
  return (
    <div className={style.InfoBlock}>
      <div className={style.RentBlock}>
        <h1>Нужная информация</h1>
        <div className={style.wrapper}>
          <div className={style.content}>
            {/* <h2>Комната 1</h2> */}
            <li>Время работы </li>
            <li>Договор о порче имущества?</li>
            <li>Алкоголь нельзя</li>
            <li>Количество мест в комнатах</li>

            <p></p>
            {/* <p>Количество гостей</p>
            <button>Забронировать</button>
            <button>Посмотреть фото</button> */}
          </div>

          <div className={style.photos}>
            {/* <div className={style.photo + ' ' + style.firstPhoto}></div> */}
            {/* <div className={style.photo + ' ' + style.secondPhoto}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
