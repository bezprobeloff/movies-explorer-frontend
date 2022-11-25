import React from 'react';
import '../../styles/project.scss';
import './AboutMe.scss';
import myPhoto from '../../images/my-photo.png';

const AboutMe = () => {
  return (
    <section className='project about-me'>
      <h2 className='project__title about-me__title'>Студент</h2>
      <img src={myPhoto} className='about-me__photo' alt='Мое фото' />
      <h3 className='about-me__name'>Виталий</h3>
      <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
      <p className='project__description about-me__description'>
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб&#8209;разработке, начал заниматься
        фриланс&#8209;заказами и ушёл с постоянной работы.
      </p>
      <a className='about-me__link-repo'>Github</a>
    </section>
  );
};

export default AboutMe;
