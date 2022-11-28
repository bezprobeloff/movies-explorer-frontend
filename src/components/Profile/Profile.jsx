import React from 'react';
import './Profile.scss';
import '../Auth/Auth.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Profile = () => {
  return (
    <>
      <AuthTitle title={`Привет, Виталий!`} isProfile={true} />
      <div className='auth__inputs auth__inputs_type_profile'>
        <AuthInput
          name='Имя'
          idName='name'
          type='text'
          value={'Виталий'}
          isProfile={true}
        />
        <AuthInput
          name='E-mail'
          idName='email'
          type='email'
          value={'pochta@yandex.ru'}
          isProfile={true}
        />
      </div>
      <AuthSubmit
        textButton='Редактировать'
        textPreLink=''
        textLink='Выйти из аккаунта'
        isProfile={true}
      />
    </>
  );
};

export default Profile;
