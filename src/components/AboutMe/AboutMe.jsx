import React from 'react';
import '../../styles/project.scss';
import './AboutMe.scss';
import myPhoto from '../../images/my-photo.png';
import { getMeAge } from '../../utils/constants';

const AboutMe = () => {
  return (
    <section className='project about-me'>
      <h2 className='project__title about-me__title'>Студент</h2>
      <img src={myPhoto} className='about-me__photo' alt='Мое фото' />
      <div className='about-me__info'>
        <h3 className='about-me__name'>Михаил</h3>
        <p className='about-me__job'>{`Фронтенд-разработчик, ${getMeAge()}`}</p>
        <p className='project__description about-me__description'>
          Я родился и живу в Нижнем Новгороде, закончил НГТУ по специальности
          &quot;системы безопасности компьютеров&quot;. C 2014 года работаю
          ведущим инженером в компании &quot;Синтек&quot;, где последние 2 года
          в основном занимался web-разработкой. <br /> В работе акцентирую
          внимание к деталям, не боюсь сложных задач , люблю простые и
          лаконичные решения, продумываю функционал. Для этого изучаю новые
          подходы в проектировании приложений, умею находить информацию и
          применять ее. <br /> А в свободное время люблю слушать музыку и
          посещать концерты, следить за новостями про экстремальные виды спорта,
          играть в хардкорные игры на консолях.
        </p>
        <a
          href='https://github.com/bezprobeloff'
          rel='noreferrer'
          target='_blank'
          className='link about-me__link-repo'
        >
          Github
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
