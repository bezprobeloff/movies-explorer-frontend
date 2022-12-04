import React from 'react';
import './AuthTitle.scss';

const AuthTitle = ({ title, isProfile = false }) => {
  const classTitle = `auth__title${
    isProfile ? ' auth__title_type_profile' : ''
  }`;
  return <h1 className={classTitle}>{title}</h1>;
};

export default AuthTitle;
