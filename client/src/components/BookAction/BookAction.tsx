import style from './BookAction.module.css';

export const BookAction = () => {
  return (
    <div className={style.BookAction}>
      <h1>Забронируйте зал заранее</h1>
      <form action="">
        <span>Дата</span>
        <span>Имя</span>
        <span>Телефон</span>
        <span></span>

        <input type="date" />
        <input type="text" className={style.name} />
        <input type="text" />
        <button>Забронировать</button>
        <div className={style.checkbox}>
          <input type="checkbox" id="test" />
          <label htmlFor="test">
            Я даю согласие на обработку персональных данных и соглашаюсь с
            <a href="#">политикой конфиденциальности</a>
          </label>
        </div>
      </form>
    </div>
  );
};
