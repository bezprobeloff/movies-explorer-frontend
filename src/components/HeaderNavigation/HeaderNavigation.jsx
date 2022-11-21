import React from 'react';
import './HeaderNavigation.scss';

const HeaderNavigation = () => {
  return (
    <div className='navigation'>
      <button className='navigation__button-burger'></button>
      <nav className='navigation__links'>
        <a className='navigation__link'>Главная</a>
        <a className='navigation__link'>Фильмы</a>
        <a className='navigation__link'>Сохранённые фильмы</a>
      </nav>
      <a className='navigation__account'>Аккаунт</a>
    </div>
  );
};

export default HeaderNavigation;
