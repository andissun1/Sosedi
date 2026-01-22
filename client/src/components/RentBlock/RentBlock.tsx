import style from './RentBlock.module.css';

export const RentBlock = () => {
  return (
    <div className={style.RentBlock} id="rent">
      <h1>Выберите комнату для своего события</h1>
      <div className={style.wrapper}>
        <div className={style.content}>
          <h2>Комната 1</h2>
          <p>Стоимость аренды</p>
          <p>Количество гостей</p>
          <button>Забронировать</button>
          <button>Посмотреть фото</button>
        </div>

        <div className={style.photos}>
          <div className={style.photo + ' ' + style.firstPhoto}></div>
          <div className={style.photo + ' ' + style.secondPhoto}></div>
        </div>
      </div>

      <div
        className={style.wrapper}
        style={{ flexDirection: 'row-reverse', marginTop: '90px' }}
      >
        <div className={style.content} style={{ backgroundColor: '#D9D9D9' }}>
          <h2>Комната 2</h2>
          <p>Стоимость аренды</p>
          <p>Количество гостей</p>
          <button>Забронировать</button>
          <button>Посмотреть фото</button>
        </div>

        <div
          className={style.photos}
          style={{ backgroundColor: 'white', border: '3px solid #D9D9D9' }}
        >
          <div className={style.photo + ' ' + style.firstPhoto}></div>
          <div className={style.photo + ' ' + style.secondPhoto}></div>
        </div>
      </div>

      <div className={style.everyRoom}>
        <h1>Что есть в каждой комнате</h1>
        <div className={style.wrapperItem}>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
        </div>
        <button>Забронировать</button>
      </div>
    </div>
  );
};
