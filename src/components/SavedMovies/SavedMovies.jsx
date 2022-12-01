import React from 'react';
import './SavedMovies.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
  return (
    <main className='movies movies_type_saved'>
      <SearchForm />
      <Preloader />
      <MoviesCardList>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </MoviesCardList>
      <ButtonMore />
    </main>
  );
};

export default SavedMovies;
