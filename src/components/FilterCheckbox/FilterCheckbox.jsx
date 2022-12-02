import React from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = ({ isStorageSave = false, isChecked, onChange }) => {
  isStorageSave ? localStorage.setItem('checkbox', true) : '';

  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        className='checkbox__switcher'
        checked={isChecked}
        onChange={onChange}
      />
      <span className='checkbox__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
