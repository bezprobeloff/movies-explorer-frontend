import React from 'react';
import './Auth.scss';

const Auth = ({ children }) => {
  return (
    <section className='auth'>
      <form className='auth__form' action='form' noValidate>
        {children}
      </form>
    </section>
  );
};

export default Auth;
