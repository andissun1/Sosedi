import style from './RentBlock.module.css';

export const RentBlock = () => {
  return (
    <div className={style.RentBlock}>
      <div className={style.slider}>Слайдер с фотками</div>
      <div className={style.content}>
        <h1>Всё про аренду</h1>
        <p>У нас вы можете: </p>
        <ul>
          <li>Отмечать день рождения</li>
          <li>Проводить встречи выпускников</li>
          <li>Организовывать деловые встречи</li>
          <li>Кушать пончики в компании друзей</li>
          <li>Организооывать турниры</li>
        </ul>
      </div>
    </div>
  );
};
