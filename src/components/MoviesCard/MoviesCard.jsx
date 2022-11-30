import React from 'react';
import './MoviesCard.scss';
import picTest from '../../images/pic-test.png';

const MoviesCard = ({ isPined = false, isTypeSaved = false }) => {
  const classButton = `link movies__card-button${
    isPined ? ' movies__card-button_pined' : ''
  }${isTypeSaved ? ' movies__card-button_saved' : ''}`;
  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <p className='movies__card-name'>33 слова о дизайне</p>
        <p className='movies__card-duration'>1ч 47м</p>
        <button className={classButton}></button>
      </div>
      <img className='movies__card-image' src={picTest} alt='Фото' />
    </li>
  );
};

export default MoviesCard;
