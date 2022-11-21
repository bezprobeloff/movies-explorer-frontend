import React from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </section>
  );
};

export default Movies;
