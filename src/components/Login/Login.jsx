import React from 'react';
import './Login.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Login = () => {
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

export default Login;
