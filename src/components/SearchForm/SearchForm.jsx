import React from 'react';
import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useInput from '../../utils/hooks/useInput';

const SearchForm = ({ onSubmit }) => {
  const searchInput = useInput({});
  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit();
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
