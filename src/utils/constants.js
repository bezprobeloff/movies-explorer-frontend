const BASE_MAIN_URL = 'https://api.movies.bezprobeloff.nomoredomains.icu';
const BASE_IMAGE_URL = 'https://api.nomoreparties.co';
const BASE_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const SHORT_DURATION = 40;
const DESKTOP_WIDTH = 1280;
const PAD_WIDTH = 768;
const MOBILE_WIDTH = 320;
const INITIAL_COUNT_MOVIES_DESKTOP = 12;
const INITIAL_COUNT_MOVIES_PAD = 8;
const INITIAL_COUNT_MOVIES_MOBILE = 5;
const COUNT_ADD_MOVIES_DESKTOP = 3;
const COUNT_ADD_MOVIES_PAD = 2;
const COUNT_ADD_MOVIES_MOBILE = 2;
const PATTERN_EMAIL =
  '^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@' +
  '[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$';
const DATE_BIRTH = '1989-03-16';
const getMeAge = () => {
  const age = new Date(new Date() - new Date(DATE_BIRTH)).getFullYear() - 1970;
  return `${age} ${
    (age > 4 && age <= 20) || age % 5 == 0 || age % 10 > 5
      ? 'лет'
      : age == 1 || age % 10 == 1
      ? 'год'
      : 'года'
  }`;
};

export {
  BASE_MAIN_URL,
  BASE_IMAGE_URL,
  BASE_MOVIES_URL,
  SHORT_DURATION,
  DESKTOP_WIDTH,
  PAD_WIDTH,
  MOBILE_WIDTH,
  INITIAL_COUNT_MOVIES_DESKTOP,
  INITIAL_COUNT_MOVIES_PAD,
  INITIAL_COUNT_MOVIES_MOBILE,
  COUNT_ADD_MOVIES_DESKTOP,
  COUNT_ADD_MOVIES_PAD,
  COUNT_ADD_MOVIES_MOBILE,
  PATTERN_EMAIL,
  DATE_BIRTH,
  getMeAge,
};
