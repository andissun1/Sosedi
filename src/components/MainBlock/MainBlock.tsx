import { useRef, useState } from 'react';
import style from './MainBlock.module.css';

export const MainBlock = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState<string | null>(null);

  const changeCardSize = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    container.current?.childNodes.forEach((div) => {
      if (div instanceof HTMLElement) {
        div.classList.remove(`${style.opened}`);
        div.classList.add(`${style.closed}`);
      }
    });

    if (container.current !== null) {
      container.current.classList.add(`${style.resizeWidget}`);
    }

    event.currentTarget.classList.add(`${style.opened}`);
    event.currentTarget.classList.remove(`${style.closed}`);

    setActiveSlide(event.currentTarget.id);
  };

  return (
    <div className={style.MainBlock} id="main" ref={container}>
      <div onClick={changeCardSize} id="games" className={style.games}>
        <span>Настолки</span>
      </div>
      <div onClick={changeCardSize} id="rent" className={style.rent}>
        <span>Аренда</span>
      </div>
      <div onClick={changeCardSize} id="events" className={style.events}>
        <span>Мероприятия</span>
      </div>
    </div>
  );
};
