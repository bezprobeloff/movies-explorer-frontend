import React from 'react';
import './Promo.scss';
import logo from '../../images/logo-web.svg';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img src={logo} className='promo__logo' alt='Логотип WEB-планета' />
        <div className='promo__info'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__text'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a className='promo__link'>Узнать больше</a>
        </div>
      </div>
    </section>
  );
};

export default Promo;
