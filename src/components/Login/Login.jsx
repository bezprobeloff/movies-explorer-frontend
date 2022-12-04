import React from 'react';
import './Login.scss';
import AuthTitle from '../Auth/AuthTitle/AuthTitle';
import AuthInput from '../Auth/AuthInput/AuthInput';
import AuthSubmit from '../Auth/AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';

const Login = ({ isLoader, onLogin, errorSubmitApi }) => {
  const form = useForm();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogin({
      email: form.values.email,
      password: form.values.password,
    });
  };
  return (
    <main className='auth'>
      <form className='auth__form' onSubmit={handleSubmit} noValidate>
        <AuthTitle title={`Рады видеть!`} />
        <div className='auth__inputs'>
          <AuthInput
            name='email'
            nameText='E-mail'
            idName='email'
            type='email'
            minLength='4'
            maxLength='30'
            errors={form.errors}
            pattern={PATTERN_EMAIL}
            onChange={form.handleChange}
          />
          <AuthInput
            name='password'
            nameText='Пароль'
            idName='password'
            type='password'
            minLength='8'
            maxLength='20'
            errors={form.errors}
            onChange={form.handleChange}
          />
        </div>
        <AuthSubmit
          textButton={`${isLoader ? 'Идет авторизация...' : 'Войти'}`}
          textPreLink='Ещё не зарегистрированы? '
          textLink='Регистрация'
          textInfoSubmit={errorSubmitApi}
          isValid={form.isValid}
          urlLinkSubmit='/signup'
        />
      </form>
    </main>
  );
};

export default Login;
