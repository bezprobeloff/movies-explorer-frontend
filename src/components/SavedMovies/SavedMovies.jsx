import React, { useState } from 'react';
import './SavedMovies.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import RenderMovies from '../RenderMovies/RenderMovies';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
  movies,
  isLoader,
  unpinMovie,
  onInputSearchError,
  getMovies,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSearchSubmit = (name) => {
    getMovies(name);
  };

  const handleInputChecked = (evt) => {
    setIsChecked(evt.target.checked);
  };

  return (
    <main className='movies movies_type_saved'>
      <SearchForm
        onSubmit={handleSearchSubmit}
        isChecked={isChecked}
        onInputSearchError={onInputSearchError}
        handleInputChecked={handleInputChecked}
      />
      {isLoader ? <Preloader /> : ''}
      <MoviesCardList>
        <RenderMovies
          movies={movies}
          unpinMovie={unpinMovie}
          isLoader={isLoader}
          isChecked={isChecked}
        />
      </MoviesCardList>
    </main>
  );
};

export default SavedMovies;
