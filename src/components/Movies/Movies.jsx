import React, { useEffect, useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import RenderMovies from '../RenderMovies/RenderMovies';
import useMoviesDiplay from '../../utils/hooks/useMoviesDiplay';
import Preloader from '../Preloader/Preloader';
import { filterMovies } from '../../utils/utils';

const Movies = ({
  movies,
  savedMovies,
  pinMovie,
  unpinMovie,
  isLoader,
  onInputSearchError,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [initialName, setInitialName] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const moviesDisplay = useMoviesDiplay({ movies, isChecked, initialName });

  const initialCheckbox = () => {
    return (localStorage.getItem('checkbox') || '') === 'true';
  };
  const initialNameValue = () => {
    return localStorage.getItem('name') || '';
  };

  const handleSearchSubmit = (name) => {
    setInitialName(name);
  };

  useEffect(() => {
    setFoundMovies(filterMovies(movies, initialName));
  }, [movies, initialName]);

  useEffect(() => {
    setIsChecked(initialCheckbox());
    setInitialName(initialNameValue());
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
        initialName={initialNameValue()}
        handleInputChecked={handleInputChecked}
      />
      {isLoader ? <Preloader /> : ''}
      <MoviesCardList>
        <RenderMovies
          movies={foundMovies}
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
