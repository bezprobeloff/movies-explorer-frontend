import React from 'react';
import './Register.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';

const Register = () => {
  const form = useForm();
  return (
    <>
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
        textButton='Зарегистрироваться'
        textPreLink='Уже зарегистрированы? '
        textLink='Войти'
        isValid={form.isValid}
        urlLinkSubmit='/signin'
      />
    </>
  );
};

export default Register;
