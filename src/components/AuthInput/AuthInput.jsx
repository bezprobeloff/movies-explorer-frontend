import React from 'react';
import './AuthInput.scss';

const AuthInput = ({ name, idName, type, value }) => {
  return (
    <div className='auth__input-container'>
      <label className='auth__label' htmlFor={`auth-${idName}`}>
        {name}
      </label>
      <input
        className='auth__input'
        id={`auth-${idName}`}
        placeholder={name}
        type={type}
        value={value}
      />
      <span className='auth__input-error'></span>
    </div>
  );
};

export default AuthInput;
