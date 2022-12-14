import React, { useContext, useEffect, useState } from 'react';
import './Profile.scss';
import '../Auth/Auth.scss';
import AuthTitle from '../Auth/AuthTitle/AuthTitle';
import AuthInput from '../Auth/AuthInput/AuthInput';
import AuthSubmit from '../Auth/AuthSubmit/AuthSubmit';
import useForm from '../../utils/hooks/useForm';
import { PATTERN_EMAIL } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ isLoader, onSignOut, onUpdateUser, errorSubmitApi }) => {
  const form = useForm();
  const [isValid, setIsValid] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    form.resetForm(currentUser);
  }, [currentUser]);

  useEffect(() => {
    const isDisabled =
      form.values.name === currentUser.name &&
      form.values.email === currentUser.email;
    setIsValid(form.isValid && !isDisabled && !isLoader);
  }, [form.values, isLoader]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onUpdateUser({
      email: form.values.email,
      name: form.values.name,
    });
  };

  return (
    <main className='auth'>
      <form
        className='auth__form auth__form_type_profile'
        onSubmit={handleSubmit}
        noValidate
      >
        <AuthTitle title={`Привет, ${currentUser.name}!`} isProfile={true} />
        <div className='auth__inputs auth__inputs_type_profile'>
          <AuthInput
            name='name'
            nameText='Имя'
            idName='name'
            type='text'
            minLength='2'
            maxLength='30'
            value={currentUser.name}
            errors={form.errors}
            onChange={form.handleChange}
            isProfile={true}
            isDisabled={isLoader}
          />
          <AuthInput
            name='email'
            nameText='E-mail'
            idName='email'
            type='email'
            minLength='4'
            maxLength='30'
            value={currentUser.email}
            errors={form.errors}
            pattern={PATTERN_EMAIL}
            isDisabled={isLoader}
            onChange={form.handleChange}
            isProfile={true}
          />
        </div>
        <AuthSubmit
          textButton={`${isLoader ? 'Сохранение...' : 'Редактировать'}`}
          textPreLink=''
          textLink='Выйти из аккаунта'
          isProfile={true}
          onSignOut={onSignOut}
          textInfoSubmit={errorSubmitApi}
          isValid={isValid}
          urlLinkSubmit='/signin'
        />
      </form>
    </main>
  );
};

export default Profile;
