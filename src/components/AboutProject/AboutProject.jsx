import React from 'react';
import '../../styles/project.scss';
import './AboutProject.scss';

const AboutProject = () => {
  return (
    <section id='about-project' className='project about-project'>
      <h2 className='project__title'>О проекте</h2>
      <ul className='about-project__points'>
        <li className='about-project__point'>
          <h3 className='project__title about-project__point-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__point'>
          <h3 className='project__title about-project__point-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about-project__times'>
        <li className='about-project__time'>
          <p className='about-project__time-title'>1 неделя</p>
          <p className='about-project__time-subtitle'>Back-end</p>
        </li>
        <li className='about-project__time'>
          <p className='about-project__time-title'>4 недели</p>
          <p className='about-project__time-subtitle'>Front-end</p>
        </li>
      </ul>
    </section>
  );
};

export default AboutProject;
