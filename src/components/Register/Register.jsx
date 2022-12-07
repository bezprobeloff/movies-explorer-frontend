import React from 'react';
import './Register.scss';
import AuthTitle from '../Auth/AuthTitle/AuthTitle';
import AuthInput from '../Auth/AuthInput/AuthInput';
import AuthSubmit from '../Auth/AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';

const Register = ({ isLoader, onRegister, errorSubmitApi }) => {
  const form = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({
      name: form.values.name,
      email: form.values.email,
      password: form.values.password,
    });
  };
  return (
    <main className='auth'>
      <form className='auth__form' onSubmit={handleSubmit} noValidate>
        <AuthTitle title={`Добро пожаловать!`} />
        <div className='auth__inputs'>
          <AuthInput
            name='name'
            nameText='Имя'
            idName='name'
            type='text'
            minLength='2'
            maxLength='30'
            onChange={form.handleChange}
            errors={form.errors}
            isDisabled={isLoader}
          />
          <AuthInput
            name='email'
            nameText='E-mail'
            idName='email'
            type='email'
            minLength='4'
            maxLength='30'
            pattern={PATTERN_EMAIL}
            errors={form.errors}
            isDisabled={isLoader}
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
            isDisabled={isLoader}
            onChange={form.handleChange}
          />
        </div>
        <AuthSubmit
          textButton={`${
            isLoader ? 'Идет регистрация...' : 'Зарегистрироваться'
          }`}
          textPreLink='Уже зарегистрированы? '
          textLink='Войти'
          isValid={form.isValid && !isLoader}
          textInfoSubmit={errorSubmitApi}
          urlLinkSubmit='/signin'
        />
      </form>
    </main>
  );
};

export default Register;
