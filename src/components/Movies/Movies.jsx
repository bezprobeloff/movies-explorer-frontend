import React, { useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import { moviesApi } from '../../utils/MoviesApi';
import RenderMovies from '../RenderMovies/RenderMovies';
import { filterMovies } from '../../utils/utils';

const Movies = ({ onInputSearchError, errorGetMoviesPopupOpen }) => {
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isPreloaderEnabled, setIsPreloaderEnabled] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleSearchSubmit = (name) => {
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        setIsPreloaderEnabled(true);
        setMovies(filterMovies(dataMovies, name));
        setIsInitialPage(false);
      })
      .catch(() => errorGetMoviesPopupOpen())
      .finally(() => {
        setIsPreloaderEnabled(false);
      });
  };
  const handleInputChecked = (evt) => {
    setIsChecked(evt.target.checked);
  };

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSearchSubmit}
        onInputSearchError={onInputSearchError}
        isStorageSave={true}
        handleInputChecked={handleInputChecked}
      />
      <MoviesCardList>
        <RenderMovies
          movies={movies}
          isInitialPage={isInitialPage}
          isPreloaderEnabled={isPreloaderEnabled}
          isChecked={isChecked}
        />
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </main>
  );
};

export default Movies;
