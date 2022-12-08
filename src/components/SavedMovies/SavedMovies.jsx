import React, { useEffect, useState } from 'react';
import './SavedMovies.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import RenderMovies from '../RenderMovies/RenderMovies';
import Preloader from '../Preloader/Preloader';
import { filterMovies } from '../../utils/utils';

const SavedMovies = ({ movies, isLoader, unpinMovie, onInputSearchError }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  const handleSearchSubmit = (name) => {
    setFoundMovies(filterMovies(movies, name));
  };

  const handleInputChecked = (evt) => {
    setIsChecked(evt.target.checked);
  };

  useEffect(() => {
    setFoundMovies(movies);
  }, [movies]);

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
          movies={foundMovies}
          unpinMovie={unpinMovie}
          isLoader={isLoader}
          isChecked={isChecked}
        />
      </MoviesCardList>
    </main>
  );
};

export default SavedMovies;
