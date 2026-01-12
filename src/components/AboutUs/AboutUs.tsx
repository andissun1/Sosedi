import style from './AboutUs.module.css';

export const AboutUs = () => {
  return (
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
      <div className={style.img}>Красивое фото кафе</div>
    </div>
  );
};
