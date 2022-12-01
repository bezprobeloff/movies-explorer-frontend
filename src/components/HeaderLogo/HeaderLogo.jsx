import React from 'react';
import './HeaderLogo.scss';
import logo from '../../images/logo.svg';

const HeaderLogo = () => {
  return (
    <a href='/' className='link header__logo-link'>
      <img src={logo} className='header__logo' alt='Логотип сайта' />
    </a>
  );
};

export default HeaderLogo;
