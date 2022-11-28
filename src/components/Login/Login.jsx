import React from 'react';
import './Login.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';

const Login = () => {
  return (
    <>
      <AuthTitle title={`Рады видеть!`} />
      <div className='auth__inputs'>
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
        textButton='Войти'
        textPreLink='Ещё не зарегистрированы? '
        textLink='Регистрация'
      />
    </>
  );
};

export default Login;
