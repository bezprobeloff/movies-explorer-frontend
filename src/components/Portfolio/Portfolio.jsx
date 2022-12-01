import React from 'react';
import './Portfolio.scss';
import '../../styles/project.scss';

const Portfolio = () => {
  return (
    <section className='project portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a
            href='https://github.com/bezprobeloff/how-to-learn'
            rel='noreferrer'
            target='_blank'
            className='link portfolio__link'
          >
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://github.com/bezprobeloff/russian-travel'
            rel='noreferrer'
            target='_blank'
            className='link portfolio__link'
          >
            Адаптивный сайт
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://github.com/bezprobeloff/react-mesto-api-full'
            rel='noreferrer'
            target='_blank'
            className='link portfolio__link'
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
