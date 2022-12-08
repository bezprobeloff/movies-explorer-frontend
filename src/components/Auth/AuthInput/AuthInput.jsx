import React from 'react';
import './AuthInput.scss';

const AuthInput = ({
  name,
  nameText,
  idName,
  type,
  minLength,
  maxLength,
  pattern,
  value = '',
  onChange,
  errors,
  isDisabled = false,
  isProfile = false,
}) => {
  const classContainer = `auth__input-container${
    isProfile ? ' auth__input-container_type_profile' : ''
  }`;
  const classLabel = `auth__label${
    isProfile ? ' auth__label_type_profile' : ''
  }`;
  const classInput = `auth__input${
    isProfile ? ' auth__input_type_profile' : ''
  }${errors[name] ? ' auth__input_type_error' : ''}`;
  const classInputError = `auth__input-error${
    isProfile ? ' auth__input-error_type_profile' : ''
  }`;

  return (
    <div className={classContainer}>
      <label className={classLabel} htmlFor={`auth-${idName}`}>
        {nameText}
      </label>
      <input
        className={classInput}
        name={name}
        id={`auth-${idName}`}
        placeholder={nameText}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        onChange={onChange}
        defaultValue={value}
        disabled={isDisabled}
        required
      />
      <span className={classInputError}>{errors[name]}</span>
    </div>
  );
};

export default AuthInput;
