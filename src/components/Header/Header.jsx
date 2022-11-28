import React from 'react';
import './Header.scss';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderLogo from '../HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <header className='header'>
      <HeaderLogo />
      <HeaderNavigation />
    </header>
  );
};

export default Header;
