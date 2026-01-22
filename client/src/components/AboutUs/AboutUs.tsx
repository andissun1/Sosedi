import { useRef } from 'react';
import style from './AboutUs.module.css';

export const AboutUs = () => {
  const wrapper = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    wrapper.current?.scrollBy({ left: 130, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    wrapper.current?.scrollBy({ left: -130, behavior: 'smooth' });
  };

  return (
    <div className={style.secondWrapper}>
      <div className={style.wrapper} ref={wrapper}>
        <div className={style.AboutUs} id="about">
          <div className={style.content}>
            <h1>Что-то о нас</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi
              architecto rerum omnis dolorum suscipit corrupti, neque cum iusto. Quia
              accusamus, ipsum tempore incidunt aspernatur fugiat doloribus deleniti ipsa
              accusantium.
            </p>
          </div>
          <div className={style.img}>Фото</div>
        </div>
        <div className={style.AboutUs}>
          <div className={style.content}>
            <h1>Правила пребывания</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi
              architecto rerum omnis dolorum suscipit corrupti, neque cum iusto. Quia
              accusamus, ipsum tempore incidunt aspernatur fugiat doloribus deleniti ipsa
              accusantium.
            </p>
          </div>
          <div className={style.img}>Фото</div>
        </div>
        <div className={style.AboutUs}>
          <div className={style.content}>
            <h1>Ещё какой-то факт</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi
              architecto rerum omnis dolorum suscipit corrupti, neque cum iusto. Quia
              accusamus, ipsum tempore incidunt aspernatur fugiat doloribus deleniti ipsa
              accusantium.
            </p>
          </div>
          <div className={style.img}>Фото</div>
        </div>
      </div>
      <button onClick={scrollPrev} className={style.prev}>
        ←
      </button>
      <button onClick={scrollNext} className={style.next}>
        →
      </button>
    </div>
  );
};
