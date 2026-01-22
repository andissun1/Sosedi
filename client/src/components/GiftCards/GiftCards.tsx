import { useRef } from 'react';
import style from './GiftCards.module.css';

export const GiftCards = () => {
  const newsView = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    newsView.current?.scrollBy({ left: 130, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    newsView.current?.scrollBy({ left: -130, behavior: 'smooth' });
  };

  const getNews = () => {
    const newsNodes = Array.from({ length: 10 }, () => (
      <div className={style.post}>
        <div className={style.img}></div>
      </div>
    ));

    return newsNodes;
  };

  return (
    <div className={style.GiftCards}>
      <div className={style.SpecialOffer}>
        <h1>Подарочные сертификаты</h1>
        <div className={style.wrapper}>
          <div className={style.NewsFromWall} ref={newsView}>
            {getNews()}
          </div>
          <button onClick={scrollNext} className={style.next}>
            →
          </button>
          <button onClick={scrollPrev} className={style.prev}>
            ←
          </button>
        </div>

        <button className={style.rentButton}>Забронировать</button>
      </div>
    </div>
  );
};
