import React from 'react';
import './Portfolio.scss';
import '../../styles/project.scss';

const Portfolio = () => {
  return (
    <section className='project portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <nav className='portfolio__links'>
        <a className='portfolio__link'>Статичный сайт</a>
        <a className='portfolio__link'>Адаптивный сайт</a>
        <a className='portfolio__link'>Одностраничное приложение</a>
      </nav>
    </section>
  );
};

export default Portfolio;
