import React from 'react';
import './Header.scss';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='Логотип сайта' />
      <HeaderNavigation></HeaderNavigation>
    </header>
  );
};

export default Header;
