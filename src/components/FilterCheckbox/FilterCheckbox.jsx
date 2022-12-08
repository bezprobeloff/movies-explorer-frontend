import React from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = ({ isChecked, onChange }) => {
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
