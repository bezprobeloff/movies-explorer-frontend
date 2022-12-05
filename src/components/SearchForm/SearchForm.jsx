import React, { useEffect } from 'react';
import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useInput from '../../utils/hooks/useInput';
import { useLocation } from 'react-router-dom';

const SearchForm = ({
  onSubmit,
  onInputSearchError,
  handleInputChecked,
  initialName = '',
  isChecked,
}) => {
  const searchInput = useInput({});
  const location = useLocation();

  useEffect(() => {
    searchInput.setValue(initialName);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (location.pathname == '/movies')
      localStorage.setItem('name', searchInput.value);

    searchInput.value != ''
      ? onSubmit(searchInput.value)
      : onInputSearchError();
  };

  return (
    <form className='search-form' onSubmit={handleSubmit} noValidate>
      <input
        className='search-form__input'
        onChange={searchInput.onChange}
        placeholder='Фильм'
        defaultValue={initialName}
        required
      />
      <button className='link search-form__button' type='submit' />
      <FilterCheckbox onChange={handleInputChecked} isChecked={isChecked} />
    </form>
  );
};

export default SearchForm;
