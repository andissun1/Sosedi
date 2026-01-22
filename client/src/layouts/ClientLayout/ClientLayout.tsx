import { AboutUs } from '../../components/AboutUs/AboutUs';
import { LatestNewsFromVK } from '../../components/LatestNewsFromVK/LatestNewsFromVK';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { NewsFromWall } from '../../components/NewsFromWall/NewsFromWall';
import { RentBlock } from '../../components/RentBlock/RentBlock';
import style from './ClientLayout.module.css';

export const ClientLayout = () => {
  return (
    <div className={style.clientLayout}>
      <MainBlock />
      <LatestNewsFromVK />
      <NewsFromWall />
      <AboutUs />
      <RentBlock />
    </div>
  );
};
