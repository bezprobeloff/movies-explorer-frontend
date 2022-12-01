import React from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = () => {
  return (
    <label className='checkbox'>
      <input type='checkbox' className='checkbox__switcher' defaultChecked />
      <span className='checkbox__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
