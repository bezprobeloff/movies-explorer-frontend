import React, { useEffect, useState } from 'react';
import './HeaderNavigation.scss';

const HeaderNavigation = () => {
  const [isBurgerClose, setIsBurgerClose] = useState(true);
  const classBurgerMenu = isBurgerClose
    ? ' navigation__button-burger_type_close'
    : '';
  const classNavigationMenu = isBurgerClose ? ' navigation_type_menu' : '';
  const classNavigationContainerMenu = isBurgerClose
    ? ' navigation__container_type_menu'
    : '';
  const classNavigationLinksMenu = isBurgerClose
    ? ''
    : ' navigation__links_invisibled';
  const classNavigationAccountMenu = isBurgerClose
    ? ''
    : ' navigation__account_invisibled';

  const onButtonBurgerClick = () => {
    setIsBurgerClose((state) => !state);
  };

  useEffect(() => {
    setIsBurgerClose(false);
  }, []);

  return (
    <div className={`navigation${classNavigationMenu}`}>
      <div className={`navigation__container${classNavigationContainerMenu}`}>
        <button
          className={`navigation__button-burger${classBurgerMenu}`}
          onClick={onButtonBurgerClick}
        ></button>
        <nav className={`navigation__links${classNavigationLinksMenu}`}>
          <a href='/' className='link navigation__link'>
            Главная
          </a>
          <a href='/movies' className='link navigation__link'>
            Фильмы
          </a>
          <a href='/saved-movies' className='link navigation__link'>
            Сохранённые фильмы
          </a>
        </nav>
        <a
          href='/profile'
          className={`link navigation__account${classNavigationAccountMenu}`}
        >
          Аккаунт
        </a>
      </div>
    </div>
  );
};

export default HeaderNavigation;
