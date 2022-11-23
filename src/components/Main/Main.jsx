import React from 'react';
import './Main.scss';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

const Main = () => {
  return (
    <section>
      <Promo></Promo>
      <AboutProject></AboutProject>
    </section>
  );
};

export default Main;
