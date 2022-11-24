import React from 'react';
import '../../styles/project.scss';
import './Techs.scss';

const Techs = () => {
  const technologies = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Git',
    'Express.js',
    'mongoDB',
  ];
  const techElements = technologies.map((tech, index) => (
    <li key={index} className='techs__item'>
      {tech}
    </li>
  ));
  return (
    <section className='project techs'>
      <h2 className='project__title'>Технологии</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='project__description techs__description'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__list'>{techElements}</ul>
    </section>
  );
};

export default Techs;
