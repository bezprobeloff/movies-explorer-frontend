import React from 'react';
import './Login.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';

const Login = () => {
  const form = useForm();
  return (
    <>
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
          value={'pochta@yandex.ru'}
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
          value={'pochta@yandex.ru'}
        />
      </div>
      <AuthSubmit
        textButton='Войти'
        textPreLink='Ещё не зарегистрированы? '
        textLink='Регистрация'
        isValid={form.isValid}
        urlLinkSubmit='/signup'
      />
    </>
  );
};

export default Login;
