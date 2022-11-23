import React from 'react';
import './SavedMovies.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import ButtonMore from '../ButtonMore/ButtonMore';

const SavedMovies = () => {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </section>
  );
};

export default SavedMovies;
