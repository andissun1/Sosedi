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
        <div className={style.AboutUs}>
          <div className={style.content}>
            <h1>О нас</h1>
            <p className={style.desc}>
              Соседи — это уютное, открытое, современное пространство для отдыха и работы,
              интересных игр и новых впечатлений, где вы платите только за время, всё
              остальное - бесплатно!
            </p>
            <ul className={style.stars}>
              <li>Настолки, приставка, кинотеатр, караоке</li>
              <li>Аренда пространства под меропрятие</li>
              <li>Еду и напитки можно принести с собой</li>
              <li>Вместимость тайм-кафе до 40 человек </li>
            </ul>
            <button>Забронировать</button>
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
