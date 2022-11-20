import React from 'react';
import './Movies.scss';
import SearchForm from '../SearchForm/SearchForm';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm></SearchForm>
    </section>
  );
};

export default Movies;
