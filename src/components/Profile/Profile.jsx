import React from 'react';
import './Profile.scss';
import '../Auth/Auth.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Profile = () => {
  return (
    <>
      <AuthTitle title={`Привет, Виталий!`} />
      <div className='auth__inputs'>
        <AuthInput name='Имя' idName='name' type='text' value={'Виталий'} />
        <AuthInput
          name='E-mail'
          idName='email'
          type='email'
          value={'pochta@yandex.ru'}
        />
      </div>
      <div></div>
      <AuthSubmit
        textButton='Редактировать'
        textPreLink=''
        textLink='Выйти из аккаунта'
      />
    </>
  );
};

export default Profile;
