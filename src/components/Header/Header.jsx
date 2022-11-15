import React from 'react';
import './Header.scss';

import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} className='header__logo' />
      <button className='header__button-burger'></button>
    </header>
  );
};

export default Header;
