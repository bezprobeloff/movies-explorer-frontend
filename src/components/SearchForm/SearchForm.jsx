import React from 'react';
import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useInput from '../../utils/hooks/useInput';

const SearchForm = ({
  onSubmit,
  onInputSearchError,
  isStorageSave = false,
}) => {
  const searchInput = useInput({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isStorageSave ? localStorage.setItem('name', searchInput.value) : '';
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
        required
      />
      <button className='link search-form__button' type='submit' />
      <FilterCheckbox isStorageSave={true} />
    </form>
  );
};

export default SearchForm;
