import React from 'react';
import './MoviesCard.scss';
import { BASE_IMAGE_URL } from '../../utils/constants';
import { convertTime } from '../../utils/utils';

const MoviesCard = ({ movie, isPined = false }) => {
  const classButton = `link movies__card-button${
    isPined ? ' movies__card-button_pined' : ''
  }`;
  const name = movie.nameRU;
  const duration = convertTime(movie.duration);
  const urlImage = `${BASE_IMAGE_URL}${movie.image.url}`;
  const trailerLink = movie.trailerLink;

  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <p className='movies__card-name'>{name}</p>
        <p className='movies__card-duration'>{duration}</p>
        <button className={classButton} />
      </div>
      <a href={trailerLink} className='movies__card-trailerLink'>
        <img className='movies__card-image' src={urlImage} alt='Фото' />
      </a>
    </li>
  );
};

export default MoviesCard;
