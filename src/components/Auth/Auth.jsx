import React from 'react';
import './Auth.scss';

const Auth = ({ children, isProfile = false }) => {
  const classForm = `auth__form${isProfile ? ' auth__form_type_profile' : ''}`;
  return (
    <section className='auth'>
      <form className={classForm} action='form' noValidate>
        {children}
      </form>
    </section>
  );
};

export default Auth;
