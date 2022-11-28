import React, { useEffect, useState } from 'react';
import './Footer.scss';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const [isVisibled, setIsVisibled] = useState(true);
  const pathsDisabled = ['/profile', '/signin', '/signup'];

  useEffect(() => {
    if (pathsDisabled.includes(location.pathname)) {
      setIsVisibled(false);
    }
  }, [location.pathname]);
  return (
    <footer className={`footer${isVisibled ? '' : ' footer_disabled'}`}>
      <div className='footer__container'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <nav className='footer__nav'>
          <a className='footer__nav-link'>Яндекс.Практикум</a>
          <a className='footer__nav-link'>Github</a>
        </nav>
        <p className='footer__copyright'>{`© ${new Date().getFullYear()}`}</p>
      </div>
    </footer>
  );
};

export default Footer;
