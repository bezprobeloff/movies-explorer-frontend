import React from 'react';
import './MoviesCard.scss';
import { BASE_IMAGE_URL } from '../../utils/constants';

const MoviesCard = ({ movie, isPined = false }) => {
  const classButton = `link movies__card-button${
    isPined ? ' movies__card-button_pined' : ''
  }`;
  const urlImage = `${BASE_IMAGE_URL}${movie.image.url}`;

  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <p className='movies__card-name'>{movie.nameRU}</p>
        <p className='movies__card-duration'>{movie.duration}</p>
        <button className={classButton} />
      </div>
      <img className='movies__card-image' src={urlImage} alt='Фото' />
    </li>
  );
};

export default MoviesCard;
