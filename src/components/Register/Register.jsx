import React from 'react';
import './Register.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
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
          value={'Виталий'}
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
        textButton={`${
          isLoader ? 'Идет регистрация...' : 'Зарегистрироваться'
        }`}
        textPreLink='Уже зарегистрированы? '
        textLink='Войти'
        isValid={form.isValid}
        textInfoSubmit={errorSubmitApi}
        urlLinkSubmit='/signin'
      />
    </form>
  );
};

export default Register;
