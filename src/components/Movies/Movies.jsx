import React, { useEffect, useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import RenderMovies from '../RenderMovies/RenderMovies';
import useMoviesDiplay from '../../utils/hooks/useMoviesDiplay';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  movies,
  savedMovies,
  getMovies,
  pinMovie,
  unpinMovie,
  isLoader,
  onInputSearchError,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [initalName, setInitalName] = useState('');
  const moviesDisplay = useMoviesDiplay({ movies, isChecked });

  const initialCheckbox = () => {
    return (localStorage.getItem('checkbox') || '') === 'true' ? true : false;
  };
  const initialNameValue = () => {
    return localStorage.getItem('name') || '';
  };

  const handleSearchSubmit = (name) => {
    localStorage.setItem('name', name);
    getMovies(name);
  };

  useEffect(() => {
    setIsChecked(initialCheckbox());
    setInitalName(initialNameValue());
  }, []);

  const handleInputChecked = (evt) => {
    setIsChecked(evt.target.checked);
    localStorage.setItem('checkbox', evt.target.checked);
  };

  return (
    <main className='movies'>
      <SearchForm
        onSubmit={handleSearchSubmit}
        isChecked={isChecked}
        onInputSearchError={onInputSearchError}
        initialName={initalName}
        handleInputChecked={handleInputChecked}
      />
      {isLoader ? <Preloader /> : ''}
      <MoviesCardList>
        <RenderMovies
          movies={movies}
          savedMovies={savedMovies}
          isLoader={isLoader}
          isChecked={isChecked}
          pinMovie={pinMovie}
          unpinMovie={unpinMovie}
          countMovies={moviesDisplay.countMovies}
        />
      </MoviesCardList>
      {moviesDisplay.isButtonMoreEnabled ? (
        <ButtonMore onClick={moviesDisplay.handleButtonMore} />
      ) : (
        ''
      )}
    </main>
  );
};

export default Movies;
