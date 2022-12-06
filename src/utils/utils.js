import { SHORT_DURATION } from './constants';

const checkTextIncludes = (str, substr) =>
  str.toLowerCase().includes(substr.toLowerCase());

const filterMovies = (dataMovies, name) => {
  if (name === '') {
    return dataMovies;
  }
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

// duration в минутах
const convertTime = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours === 0 ? '' : hours + 'ч '}` + `${minutes}м`;
};

export { filterMovies, filterShortMovies, convertTime };
