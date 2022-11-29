import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
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
