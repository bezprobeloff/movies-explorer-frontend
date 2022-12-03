import React from 'react';
import './Profile.scss';
import '../Auth/Auth.scss';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthInput from '../AuthInput/AuthInput';
import AuthSubmit from '../AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';

const Profile = () => {
  const form = useForm();
  return (
    <>
      <AuthTitle title={`Привет, Виталий!`} isProfile={true} />
      <div className='auth__inputs auth__inputs_type_profile'>
        <AuthInput
          name='name'
          nameText='Имя'
          idName='name'
          type='text'
          value={'Виталий'}
          minLength='2'
          maxLength='30'
          errors={form.errors}
          onChange={form.handleChange}
          isProfile={true}
        />
        <AuthInput
          name='email'
          nameText='E-mail'
          idName='email'
          type='email'
          value={'pochta@yandex.ru'}
          minLength='4'
          maxLength='30'
          errors={form.errors}
          pattern={PATTERN_EMAIL}
          onChange={form.handleChange}
          isProfile={true}
        />
      </div>
      <AuthSubmit
        textButton='Редактировать'
        textPreLink=''
        textLink='Выйти из аккаунта'
        isProfile={true}
        isValid={form.isValid}
        urlLinkSubmit='/signin'
      />
    </>
  );
};

export default Profile;
