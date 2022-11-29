import React from 'react';
import './Portfolio.scss';
import '../../styles/project.scss';

const Portfolio = () => {
  return (
    <section className='project portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <nav className='portfolio__links'>
        <a
          href='https://github.com/bezprobeloff/how-to-learn'
          rel='noreferrer'
          target='_blank'
          className='link portfolio__link'
        >
          Статичный сайт
        </a>
        <a
          href='https://github.com/bezprobeloff/russian-travel'
          rel='noreferrer'
          target='_blank'
          className='link portfolio__link'
        >
          Адаптивный сайт
        </a>
        <a
          href='https://github.com/bezprobeloff/react-mesto-api-full'
          rel='noreferrer'
          target='_blank'
          className='link portfolio__link'
        >
          Одностраничное приложение
        </a>
      </nav>
    </section>
  );
};

export default Portfolio;
