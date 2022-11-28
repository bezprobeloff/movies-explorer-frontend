import React from 'react';
import './AuthInput.scss';

const AuthInput = ({ name, idName, type, value, isProfile = false }) => {
  const classContainer = `auth__input-container${
    isProfile ? ' auth__input-container_type_profile' : ''
  }`;
  const classLabel = `auth__label${
    isProfile ? ' auth__label_type_profile' : ''
  }`;
  const classInput = `auth__input${
    isProfile ? ' auth__input_type_profile' : ''
  }`;
  const classInputError = `auth__input-error${
    isProfile ? ' auth__input-error_type_profile' : ''
  }`;
  return (
    <div className={classContainer}>
      <label className={classLabel} htmlFor={`auth-${idName}`}>
        {name}
      </label>
      <input
        className={classInput}
        id={`auth-${idName}`}
        placeholder={name}
        type={type}
        value={value}
      />
      <span className={classInputError}>Что-то пошло не так</span>
    </div>
  );
};

export default AuthInput;
