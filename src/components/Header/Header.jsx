import React, { useEffect, useState } from 'react';
import './Header.scss';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isTypeAuth, setIsTypeAuth] = useState(false);
  const [isTypeMain, setIsTypeMain] = useState(false);
  const typesAuth = ['/signin', '/signup'];
  const classHeader = `header${isTypeAuth ? ' header_type_auth' : ''}${
    isTypeMain ? ' header_type_main' : ''
  }`;
  useEffect(() => {
    if (location.pathname === '/') {
      setIsTypeMain(true);
    } else if (typesAuth.includes(location.pathname)) {
      setIsTypeAuth(true);
    }
  }, [location.pathname]);
  return (
    <header className={classHeader}>
      <div
        className={`header__container${
          isTypeAuth ? ' header__container_type_auth' : ''
        }`}
      >
        <HeaderLogo />
        {isTypeAuth ? '' : <HeaderNavigation />}
      </div>
    </header>
  );
};

export default Header;
