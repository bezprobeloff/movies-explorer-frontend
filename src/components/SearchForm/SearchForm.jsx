import React from 'react';
import './SearchForm.scss';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <form className='search-form'>
      <input className='search-form__input' placeholder='Фильм' />
      <button className='search-form__button' />
      <FilterCheckbox></FilterCheckbox>
    </form>
  );
};

export default SearchForm;
