import React, { useState } from 'react';
import './FilterCheckbox.scss';

const FilterCheckbox = ({ isStorageSave = false }) => {
  const [isChecked, setIsChecked] = useState(false);
  isStorageSave ? localStorage.setItem('checkbox', true) : '';
  const handleCheckboxChange = (evt) => {
    setIsChecked(evt.target.checked);
  };
  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        className='checkbox__switcher'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className='checkbox__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
