import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className='notFound'>
      <div className='notFound__info'>
        <h1 className='notFound__title'>404</h1>
        <p className='notFound__description'>Страница не найдена</p>
      </div>
      <a href='/' className='link notFound__link'>
        Назад
      </a>
    </section>
  );
};

export default NotFound;
