import React, { useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const handleSearchSubmit = () => {
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        setMovies([...dataMovies]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className='movies'>
      <SearchForm onSubmit={handleSearchSubmit} />
      <Preloader />
      <MoviesCardList>
        {movies.slice(0, 5).map((movie) => {
          return <MoviesCard movie={movie} key={movie.id} />;
        })}
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </main>
  );
};

export default Movies;
