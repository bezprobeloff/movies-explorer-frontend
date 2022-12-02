import React, { useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

const Movies = ({ onInputSearchError, errorGetMoviesPopupOpen }) => {
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [isPreloaderEnabled, setIsPreloaderEnabled] = useState(false);
  const [movies, setMovies] = useState([]);
  const checkTextIncludes = (str, substr) => str.toLowerCase().includes(substr);
  const filterMovies = (dataMovies, name) => {
    const foundMovies = dataMovies.filter(
      (movie) =>
        checkTextIncludes(movie.nameRU, name) ||
        checkTextIncludes(movie.nameRU, name)
    );
    setMovies([...foundMovies]);
    localStorage.setItem('foundMovies', foundMovies);
    setIsInitialPage(false);
  };
  const handleSearchSubmit = (name) => {
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        setIsPreloaderEnabled(true);
        filterMovies(dataMovies, name);
      })
      .catch(() => errorGetMoviesPopupOpen())
      .finally(() => {
        setIsPreloaderEnabled(false);
      });
  };
  const renderMovies = () => {
    if (isPreloaderEnabled) {
      return <Preloader />;
    }
    return movies.length == 0 && !isInitialPage ? (
      <h2 className='movies__card-list-title'>Ничего не найдено</h2>
    ) : (
      movies.slice(0, 5).map((movie) => {
        return <MoviesCard movie={movie} key={movie.id} />;
      })
    );
  };

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSearchSubmit}
        onInputSearchError={onInputSearchError}
        isStorageSave={true}
      />
      <MoviesCardList>{renderMovies()}</MoviesCardList>
      <ButtonMore></ButtonMore>
    </main>
  );
};

export default Movies;
