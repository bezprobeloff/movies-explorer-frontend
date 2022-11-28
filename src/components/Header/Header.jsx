import React, { useEffect, useState } from 'react';
import './Header.scss';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isTypeAuth, setIsTypeAuth] = useState(false);
  const typesAuth = ['/signin', '/signup'];

  useEffect(() => {
    if (typesAuth.includes(location.pathname)) {
      setIsTypeAuth(true);
    }
  }, [location.pathname]);
  return (
    <header className={`header${isTypeAuth ? ' header_type_auth' : ''}`}>
      <HeaderLogo />
      {isTypeAuth ? '' : <HeaderNavigation />}
    </header>
  );
};

export default Header;
