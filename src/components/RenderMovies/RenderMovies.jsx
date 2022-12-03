import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import { filterShortMovies } from '../../utils/utils';

const RenderMovies = ({
  isPreloaderEnabled,
  movies,
  isInitialPage,
  isChecked,
  countMovies = movies.length,
}) => {
  const preloader = isPreloaderEnabled ? <Preloader /> : '';
  const notFoundMovies =
    movies.length == 0 && !isInitialPage ? (
      <h2 className='movies__card-list-title'>Ничего не найдено</h2>
    ) : (
      ''
    );
  const renderMovies = filterShortMovies(movies, isChecked)
    .slice(0, countMovies)
    .map((movie) => {
      return <MoviesCard movie={movie} key={movie.id} />;
    });

  return (
    <>
      {preloader}
      {notFoundMovies}
      {renderMovies}
    </>
  );
};

export default RenderMovies;
