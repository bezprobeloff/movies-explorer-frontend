import { useEffect, useState } from 'react';
import {
  COUNT_ADD_MOVIES_DESKTOP,
  COUNT_ADD_MOVIES_MOBILE,
  COUNT_ADD_MOVIES_PAD,
  DESKTOP_WIDTH,
  INITIAL_COUNT_MOVIES_DESKTOP,
  INITIAL_COUNT_MOVIES_MOBILE,
  INITIAL_COUNT_MOVIES_PAD,
  PAD_WIDTH,
} from '../constants';
import { filterShortMovies, filterMovies } from '../utils';

const useMoviesDisplay = ({ movies, isChecked, initialName }) => {
  const [windowSize, setWindowsSize] = useState(window.screen.width);
  const [countMovies, setCountMovies] = useState(0);
  const [isButtonMoreEnabled, setIsButtonMoreEnabled] = useState(false);

  const handleWindowSize = () => {
    setWindowsSize(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  useEffect(() => {
    if (windowSize >= DESKTOP_WIDTH) {
      setCountMovies(INITIAL_COUNT_MOVIES_DESKTOP);
    } else if (windowSize < DESKTOP_WIDTH && windowSize >= PAD_WIDTH) {
      setCountMovies(INITIAL_COUNT_MOVIES_PAD);
    } else {
      setCountMovies(INITIAL_COUNT_MOVIES_MOBILE);
    }
  }, [windowSize, movies]);

  useEffect(() => {
    const foundMovies = filterMovies(movies, initialName);
    const filterIsCheckedMovies = filterShortMovies(foundMovies, isChecked);
    filterIsCheckedMovies.length > countMovies
      ? setIsButtonMoreEnabled(true)
      : setIsButtonMoreEnabled(false);
  }, [countMovies, movies, isChecked, initialName]);

  const handleButtonMore = () => {
    if (windowSize >= DESKTOP_WIDTH) {
      setCountMovies(countMovies + COUNT_ADD_MOVIES_DESKTOP);
    } else if (windowSize < DESKTOP_WIDTH && windowSize >= PAD_WIDTH) {
      setCountMovies(countMovies + COUNT_ADD_MOVIES_PAD);
    } else {
      setCountMovies(countMovies + COUNT_ADD_MOVIES_MOBILE);
    }
  };

  return { countMovies, isButtonMoreEnabled, handleButtonMore };
};

export default useMoviesDisplay;
