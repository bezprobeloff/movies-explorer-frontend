import React from 'react';
import './Register.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Register = () => {
  return (
    <>
      <AuthTitle title={`Добро пожаловать!`} />
      <div className='auth__inputs'>
        <AuthInput name='Имя' idName='name' type='text' value={'Виталий'} />
        <AuthInput
          name='E-mail'
          idName='email'
          type='email'
          value={'pochta@yandex.ru'}
        />
        <AuthInput
          name='Пароль'
          idName='password'
          type='password'
          value={'pochta@yandex.ru'}
        />
      </div>
      <AuthSubmit
        textButton='Редактировать'
        textPreLink=''
        textLink='Выйти из аккаунта'
      />
    </>
  );
};

export default Register;
