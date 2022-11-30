import React from 'react';
import './SavedMovies.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import SearchForm from '../SearchForm/SearchForm';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
      <Preloader />
      <MoviesCardList>
        <MoviesCard isTypeSaved={true} />
        <MoviesCard isTypeSaved={true} />
        <MoviesCard isTypeSaved={true} />
      </MoviesCardList>
      <ButtonMore></ButtonMore>
    </section>
  );
};

export default SavedMovies;
