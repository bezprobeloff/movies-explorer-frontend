import React, { useContext, useEffect, useState } from 'react';
import './MoviesCard.scss';
import { BASE_IMAGE_URL } from '../../utils/constants';
import { convertTime } from '../../utils/utils';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MoviesCard = ({ movie, savedMovies, pinMovie, unpinMovie }) => {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isPined, setIsPined] = useState(false);
  const classButton = `link movies__card-button${
    isPined ? ' movies__card-button_pined' : ''
  }`;
  const name = movie.nameRU;
  const duration = convertTime(movie.duration);
  const urlImage =
    location.pathname === '/movies'
      ? `${BASE_IMAGE_URL}${movie.image.url}`
      : movie.image;
  const trailerLink = movie.trailerLink;

  useEffect(() => {
    if (location.pathname === '/movies') {
      const isOwner = savedMovies.some(
        (savedMovie) =>
          savedMovie.movieId === movie.id &&
          savedMovie.owner === currentUser._id
      );
      setIsPined(isOwner);
    }
  }, []);

  const handleButton = () => {
    if (location.pathname === '/movies') {
      isPined
        ? unpinMovie(savedMovies.find((item) => item.movieId === movie.id))
        : pinMovie(movie);
    } else {
      unpinMovie(movie);
    }
    setIsPined((state) => !state);
  };

  return (
    <li className='movies__card'>
      <div className='movies__card-info'>
        <p className='movies__card-name'>{name}</p>
        <p className='movies__card-duration'>{duration}</p>
        <button className={classButton} onClick={handleButton} />
      </div>
      <a href={trailerLink} className='link movies__card-trailerLink'>
        <img className='movies__card-image' src={urlImage} alt='Фото' />
      </a>
    </li>
  );
};

export default MoviesCard;
