import React from 'react';
import './AuthSubmit.scss';

const AuthSubmit = ({ textButton, textPreLink, textLink }) => {
  return (
    <div className='auth__submit-container'>
      <button className='auth__button-submit' type='button'>
        {textButton}
      </button>
      <p className='auth__text'>
        {textPreLink}
        <a className='auth__link'>{textLink}</a>
      </p>
    </div>
  );
};

export default AuthSubmit;
