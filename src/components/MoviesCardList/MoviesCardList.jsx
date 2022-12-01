import React from 'react';
import './MoviesCardList.scss';

const MoviesCardList = ({ children }) => {
  return <ul className='movies__card-list'>{children}</ul>;
};

export default MoviesCardList;
