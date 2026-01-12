import { useRef } from 'react';
import style from './MainBlock.module.css';

export const MainBlock = () => {
  const container = useRef<HTMLDivElement>(null);

  const changeCardSize = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    container.current?.childNodes.forEach((div) => {
      div.classList.remove(`${style.opened}`);
      div.classList.add(`${style.closed}`);
    });

    container.current.classList.add(`${style.resizeWidget}`);

    event.currentTarget.classList.add(`${style.opened}`);
    event.currentTarget.classList.remove(`${style.closed}`);
  };

  return (
    <div className={style.MainBlock} id="main" ref={container}>
      <div onClick={changeCardSize} className={style.games}>
        <span>Настолки</span>
      </div>
      <div onClick={changeCardSize} className={style.rent}>
        <span>Аренда</span>
      </div>
      <div onClick={changeCardSize} className={style.events}>
        <span>Мероприятия</span>
      </div>
    </div>
  );
};
