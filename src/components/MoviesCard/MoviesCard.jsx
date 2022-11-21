import React from 'react';
import './MoviesCard.scss';
import picTest from '../../images/pic-test.png';

const MoviesCard = () => {
  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <p className='movies__card-name'>33 слова о дизайне</p>
        <p className='movies__card-duration'>1ч 47м</p>
        <button className='movies__card-button'></button>
      </div>
      <img className='movies__card-image' src={picTest} alt='Фото' />
    </li>
  );
};

export default MoviesCard;
