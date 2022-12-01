import React from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
  return (
    <main className='movies'>
      <SearchForm></SearchForm>
      <Preloader />
      <MoviesCardList>
        <MoviesCard isPined={true} />
        <MoviesCard isPined={true} />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </main>
  );
};

export default Movies;
