import { SHORT_DURATION } from './constants';

const checkTextIncludes = (str, substr) =>
  str.toLowerCase().includes(substr.toLowerCase());

const filterMovies = (dataMovies, name) => {
  const movies = dataMovies.filter(
    (movie) =>
      checkTextIncludes(movie.nameRU, name) ||
      checkTextIncludes(movie.nameRU, name)
  );

  return movies;
};

const filterShortMovies = (movies, isChecked) => {
  if (isChecked) {
    return movies.filter((movie) => movie.duration <= SHORT_DURATION);
  } else {
    return movies;
  }
};

export { filterMovies, filterShortMovies };
