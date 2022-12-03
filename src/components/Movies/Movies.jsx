import React, { useEffect, useState } from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import { moviesApi } from '../../utils/MoviesApi';
import RenderMovies from '../RenderMovies/RenderMovies';
import { filterMovies } from '../../utils/utils';
import useMoviesDiplay from '../../utils/hooks/useMoviesDiplay';

const Movies = ({ onInputSearchError, errorGetMoviesPopupOpen }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [movies, setMovies] = useState([]);
  const moviesDisplay = useMoviesDiplay({ movies, isChecked });

  const initialCheckbox = () => {
    return (localStorage.getItem('checkbox') || '') === 'true' ? true : false;
  };
  const initialNameValue = () => {
    return localStorage.getItem('name') || '';
  };

  const getMovies = (name) => {
    setIsLoader(true);
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        setMovies([...filterMovies(dataMovies, name)]);
      })
      .catch(() => errorGetMoviesPopupOpen())
      .finally(() => {
        setIsLoader(false);
      });
  };
  const handleSearchSubmit = (name) => {
    getMovies(name);
  };

  useEffect(() => {
    setIsChecked(initialCheckbox());
    getMovies(initialNameValue());
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
      <MoviesCardList>
        <RenderMovies
          movies={movies}
          isLoader={isLoader}
          isChecked={isChecked}
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
