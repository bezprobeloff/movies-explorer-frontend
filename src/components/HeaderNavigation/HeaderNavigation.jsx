import React, { useEffect, useState } from 'react';
import './HeaderNavigation.scss';
import { NavLink } from 'react-router-dom';

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
  const classLink = 'link navigation__link';

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
          <NavLink
            to='/'
            exact
            className={`${classLink} navigation__link_type_home`}
            activeClassName={'navigation__link_type_active'}
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            activeClassName={'navigation__link_type_active'}
            className={classLink}
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            activeClassName={'navigation__link_type_active'}
            className={classLink}
          >
            Сохранённые фильмы
          </NavLink>
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
