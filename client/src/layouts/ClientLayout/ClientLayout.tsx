import { AboutUs } from '../../components/AboutUs/AboutUs';
import { BookAction } from '../../components/BookAction/BookAction';
import { Feedbacks } from '../../components/Feedbacks/Feedbacks';
import { GiftCards } from '../../components/GiftCards/GiftCards';
import { InfoBlock } from '../../components/InfoBlock/InfoBlock';
// import { LatestNewsFromVK } from '../../components/LatestNewsFromVK/LatestNewsFromVK';
import { MainBlock } from '../../components/MainBlock/MainBlock';
import { NewsFromWall } from '../../components/NewsFromWall/NewsFromWall';

import { RentBlock } from '../../components/RentBlock/RentBlock';
import { SpecialOffer } from '../../components/SpecialOffer/SpecialOffer';
import { WelcomeWords } from '../../components/WelcomeWords/WelcomeWords';
import style from './ClientLayout.module.css';

export const ClientLayout = () => {
  return (
    <div className={style.clientLayout}>
      <MainBlock />
      <AboutUs />
      <NewsFromWall />
      <RentBlock />
      <SpecialOffer />
      <GiftCards />
      <InfoBlock />
      <Feedbacks />
      <BookAction />
      <WelcomeWords />
      {/* <LatestNewsFromVK /> */}
    </div>
  );
};
