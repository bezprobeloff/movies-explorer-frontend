import React from 'react';
import './Main.scss';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <section>
      <Promo></Promo>
      <AboutProject></AboutProject>
      <Techs></Techs>
      <AboutMe></AboutMe>
    </section>
  );
};

export default Main;
