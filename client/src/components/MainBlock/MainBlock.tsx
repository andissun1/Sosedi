import style from './MainBlock.module.css';

export const MainBlock = () => {
  return (
    <div className={style.MainBlock} id="main">
      <div id="events" className={style.firstLineText}>
        <span>«Соседи»:</span>
        <div className={style.pattern}></div>
      </div>

      <div id="events" className={style.bigBlock}>
        <span></span>
      </div>

      <div id="events" className={style.secondLineText}>
        <span>Играй. Работай.</span>
      </div>
      <div id="events" className={style.thirdLineText}>
        <span>Наслаждайся.</span>
      </div>

      <div id="games" className={style.games}>
        <span>Настолки</span>
        <div className={style.link}></div>
      </div>
      <div id="rent" className={style.rent}>
        <span>Аренда</span>
        <div className={style.link}></div>
      </div>
      <div id="events" className={style.events}>
        <span>Мероприятия</span>
        <div className={style.link}></div>
      </div>

      <div id="events" className={style.actionButton}>
        <span>Забронировать</span>
      </div>
    </div>
  );
};
