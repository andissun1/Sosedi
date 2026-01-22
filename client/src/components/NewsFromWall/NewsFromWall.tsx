import { useRef } from 'react';
import style from './NewsFromWall.module.css';

export const NewsFromWall = () => {
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
        <div className={style.img}>Картинка с поста</div>
        <div className={style.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error possimus
            laboriosam sunt, rem ipsum numquam delectus? Suscipit voluptatibus laborum
            repudiandae ex velit animi quod, quibusdam, perferendis natus quaerat ipsum
            nemo!
          </p>
        </div>
      </div>
    ));

    return newsNodes;
  };

  return (
    <div className={style.wrapper} id="latestNews">
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
  );
};
