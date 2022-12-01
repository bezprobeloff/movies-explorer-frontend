import React from 'react';
import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useInput from '../../utils/hooks/useInput';

const SearchForm = ({ onSubmit, onInputSearchError }) => {
  const searchInput = useInput({});
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
