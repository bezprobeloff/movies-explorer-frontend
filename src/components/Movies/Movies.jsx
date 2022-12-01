import React, { useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = ({ onInputSearchError }) => {
  const [isInitialPage, setIsInitialPage] = useState(true);
  const [movies, setMovies] = useState([]);
  const checkTextIncludes = (str, substr) => str.toLowerCase().includes(substr);
  const filterMovies = (dataMovies, name) => {
    const foundMovies = dataMovies.filter(
      (movie) =>
        checkTextIncludes(movie.nameRU, name) ||
        checkTextIncludes(movie.nameRU, name)
    );
    setMovies([...foundMovies]);
    setIsInitialPage(false);
  };
  const handleSearchSubmit = (name) => {
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        filterMovies(dataMovies, name);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSearchSubmit}
        onInputSearchError={onInputSearchError}
      />
      <MoviesCardList>
        {movies.length == 0 && !isInitialPage ? (
          <h2 className='movies__card-list-title'>Ничего не найдено</h2>
        ) : (
          movies.slice(0, 5).map((movie) => {
            return <MoviesCard movie={movie} key={movie.id} />;
          })
        )}
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </main>
  );
};

export default Movies;
