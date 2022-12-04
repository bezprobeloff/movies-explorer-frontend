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
import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const App = () => {
  const location = useLocation();
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({
    name: 'user',
    isLoggedIn: false,
    email: '',
  });
  const [isLoader, setIsLoader] = useState(false);
  //  const [isTokenChecked, setIsTokenChecked] = useState(false);
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
  const routesFootersDisabled = ['/signin', '/signup', '/profile', '/404'];
  const routesHeaderDisabled = ['/404'];

  /*
  useEffect(() => {
    if (currentUser.isLoggedIn && isTokenChecked) {
      Promise.all([api.getUser(), api.getInitialCards()])
        .then(([user, dataCards]) => {
          setCurrentUser({ ...currentUser, ...user });
          setCards([...dataCards]);
        })
        .then(() => history.push('/'))
        .catch((err) => console.log(err));
    }
  }, [isTokenChecked, currentUser.isLoggedIn]);
*/
  /*
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      checkToken(token);
    } else {
      setIsTokenChecked(true);
    }
  }, [currentUser.isLoggedIn]);
*/
  const onLogin = ({ email, password }) => {
    setIsLoader(true);
    return mainApi
      .authorize({ email, password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        setCurrentUser({ ...currentUser, isLoggedIn: true });
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

  /*
  const onSignOut = () => {
    localStorage.removeItem('token');
    setIsTokenChecked(false);
    setCurrentUser({ ...currentUser, isLoggedIn: false });
    history.push('/signin');
  };
*/
  /*
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
*/
  const infoTooltipOpen = () => {
    setIsInfoTooltipOpen(true);
  };
  const closePopup = () => {
    setCurrentUser({ name: 'user' });
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
        {isHeaderDisable ? '' : <Header />}
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/movies'>
            <Movies
              onInputSearchError={onInputSearchError}
              errorGetMoviesPopupOpen={errorGetMoviesPopupOpen}
            />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies
              onInputSearchError={onInputSearchError}
              errorGetMoviesPopupOpen={errorGetMoviesPopupOpen}
            />
          </Route>
          <Route path='/profile'>
            <Auth isProfile={true}>
              <Profile />
            </Auth>
          </Route>
          <Route path='/signin'>
            <Auth>
              <Login
                isLoader={isLoader}
                onLogin={onLogin}
                errorSubmitApi={errorSubmitApi}
              />
            </Auth>
          </Route>
          <Route path='/signup'>
            <Auth>
              <Register
                isLoader={isLoader}
                onRegister={onRegister}
                errorSubmitApi={errorSubmitApi}
              />
            </Auth>
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
