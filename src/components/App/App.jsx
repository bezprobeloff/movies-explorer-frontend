import React, { useEffect, useState } from 'react';
import './App.scss';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/utils';

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    name: '',
    isLoggedIn: false,
    email: '',
    _id: '',
  });
  const [isLoader, setIsLoader] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [errorSubmitApi, setErrorSubmitApi] = useState('');
  const [isFooterDisable, setIsFooterDisable] = useState(false);
  const [isHeaderDisable, setIsHeaderDisable] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [infoTooltipProps, setInfoTooltipProps] = useState({
    message: '',
    isError: false,
    buttonText: '',
    onSubmit: () => {},
  });
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const routesFootersDisabled = ['/signin', '/signup', '/profile', '/404'];
  const routesHeaderDisabled = ['/404'];
  const initialNameValue = () => {
    return localStorage.getItem('name') || '';
  };

  useEffect(() => {
    if (isTokenChecked && currentUser.isLoggedIn) {
      getMovies(initialNameValue());
      getSavedMovies();
    }
  }, [isTokenChecked, currentUser.isLoggedIn]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      checkToken(token);
    } else {
      setIsTokenChecked(true);
    }
  }, [currentUser.isLoggedIn]);

  const getUser = (token) => {
    return mainApi
      .getUser(token)
      .then((user) => {
        setCurrentUser({ ...user, isLoggedIn: true });
      })
      .catch((res) => {
        res.then((err) => {
          onSignOut();
          console.log(err.message);
        });
      });
  };

  const onUpdateUser = ({ email, name }) => {
    setIsLoader(true);
    return mainApi
      .updateUser({ email, name })
      .then((data) => {
        setCurrentUser({ ...currentUser, name: data.name, email: data.email });
        setInfoTooltipProps({
          ...infoTooltipProps,
          message: 'Данные успешно обновлены.',
          buttonText: 'OK',
          isError: false,
          onSubmit: closePopup,
        });
        infoTooltipOpen();
      })
      .catch((res) => {
        res.then((err) => {
          console.log(err.message);
          setErrorSubmitApi(err.message);
        });
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  const onLogin = ({ email, password }) => {
    setIsLoader(true);
    return mainApi
      .authorize({ email, password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        setCurrentUser({ ...currentUser, isLoggedIn: true });
        getUser(data.token);
        history.push('/movies');
      })
      .catch((res) => {
        res.then((err) => {
          setErrorSubmitApi(err.message);
        });
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  const onRegister = ({ name, email, password }) => {
    setIsLoader(true);
    return mainApi
      .register({ name, email, password })
      .then(() => {
        onLogin({ email, password });
      })
      .catch((res) => {
        res.then((err) => {
          if (err.statusCode === 400) {
            setErrorSubmitApi('При регистрации пользователя произошла ошибка.');
          } else {
            setErrorSubmitApi(err.message);
          }
        });
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('checkbox');
    setIsTokenChecked(false);
    setCurrentUser({ name: '', isLoggedIn: false, email: '', _id: '' });
    history.push('/');
  };

  const getSavedMovies = (name = '') => {
    return mainApi
      .getMovies()
      .then((data) => {
        setSavedMovies([...filterMovies(data, name)]);
      })
      .catch((res) => {
        res.then((err) => {
          console.log(err.message);
        });
      });
  };

  const getMovies = (name = '') => {
    setIsLoader(true);
    moviesApi
      .getMovies()
      .then((dataMovies) => {
        setMovies([...filterMovies(dataMovies, name)]);
      })
      .catch(() => errorGetMoviesPopupOpen())
      .finally(() => {
        setIsLoader(false);
      });
  };

  const createMovie = (movie) => {
    return mainApi
      .createMovie({ ...movie })
      .then(() => getSavedMovies())
      .catch((res) => {
        res.then((err) => {
          console.log(err.message);
        });
      });
  };

  const removeMovie = (movie) => {
    return mainApi
      .removeMovie(movie)
      .then(() => getSavedMovies())
      .catch((res) => {
        res.then((err) => {
          console.log(err.message);
        });
      });
  };

  // проверяем наличие токена, если все хорошо сразу логинимся
  const checkToken = async (token) => {
    mainApi
      .getUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser({
            ...currentUser,
            isLoggedIn: true,
            ...res,
          });
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsTokenChecked(true));
  };

  const infoTooltipOpen = () => {
    setIsInfoTooltipOpen(true);
  };
  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  };
  const onInputSearchError = () => {
    setInfoTooltipProps({
      ...infoTooltipProps,
      message: 'Нужно ввести ключевое слово',
      buttonText: 'OK',
      isError: true,
      onSubmit: closePopup,
    });
    infoTooltipOpen();
  };
  const errorGetMoviesPopupOpen = () => {
    setInfoTooltipProps({
      ...infoTooltipProps,
      message:
        'Во время запроса произошла ошибка. ' +
        'Возможно, проблема с соединением или сервер недоступен. ' +
        'Подождите немного и попробуйте ещё раз',
      buttonText: 'OK',
      isError: true,
      onSubmit: closePopup,
    });
    infoTooltipOpen();
  };

  useEffect(() => {
    setIsHeaderDisable(false);
    setIsFooterDisable(false);
    if (routesHeaderDisabled.includes(location.pathname)) {
      setIsHeaderDisable(true);
    }
    if (routesFootersDisabled.includes(location.pathname)) {
      setIsFooterDisable(true);
    }
  }, [location.pathname]);
  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        {isHeaderDisable ? '' : <Header isLoggedIn={currentUser.isLoggedIn} />}
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            onInputSearchError={onInputSearchError}
            movies={movies}
            savedMovies={savedMovies}
            getMovies={getMovies}
            pinMovie={createMovie}
            unpinMovie={removeMovie}
            isLoggedIn={currentUser.isLoggedIn}
            isTokenChecked={isTokenChecked}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            getMovies={getSavedMovies}
            movies={savedMovies}
            unpinMovie={removeMovie}
            onInputSearchError={onInputSearchError}
            isLoggedIn={currentUser.isLoggedIn}
            isTokenChecked={isTokenChecked}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            isLoader={isLoader}
            onSignOut={onSignOut}
            onUpdateUser={onUpdateUser}
            errorSubmitApi={errorSubmitApi}
            isLoggedIn={currentUser.isLoggedIn}
            isTokenChecked={isTokenChecked}
          />
          <Route path='/signin'>
            <Login
              isLoader={isLoader}
              onLogin={onLogin}
              errorSubmitApi={errorSubmitApi}
            />
          </Route>
          <Route path='/signup'>
            <Register
              isLoader={isLoader}
              onRegister={onRegister}
              errorSubmitApi={errorSubmitApi}
            />
          </Route>
          <Route>
            <Redirect to='/404' />
            <NotFound />
          </Route>
        </Switch>
        {isFooterDisable ? '' : <Footer />}
        <InfoTooltip
          name='infoTooltip'
          buttonText={infoTooltipProps.buttonText}
          isError={infoTooltipProps.isError}
          message={infoTooltipProps.message}
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          onSubmit={infoTooltipProps.onSubmit}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};
export default App;
