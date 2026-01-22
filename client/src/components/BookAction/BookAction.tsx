import style from './BookAction.module.css';

export const BookAction = () => {
  return (
    <div className={style.BookAction} id="RentBlock">
      <h1>Забронируйте зал заранее</h1>
      <form action="">
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Телефон" />
        <input type="text" placeholder="Отправить" />
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
