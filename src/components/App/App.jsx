import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { Route, Switch, useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const location = useLocation();
  const [isTypeAuth, setIsTypeAuth] = useState(false);
  const [isFooterDisable, setIsFooterDisable] = useState(false);
  const typesAuth = ['/signin', '/signup'];
  const footersDisabled = ['/signin', '/signup', '/profile'];
  const classApp = `App${isTypeAuth ? ' App_type_auth' : ''}`;

  useEffect(() => {
    if (typesAuth.includes(location.pathname)) {
      setIsTypeAuth(true);
    }
    if (footersDisabled.includes(location.pathname)) {
      setIsFooterDisable(true);
    }
  }, [location.pathname]);
  return (
    <div className={classApp}>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route path='/movies'>
          <Movies></Movies>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies></SavedMovies>
        </Route>
        <Route path='/profile'>
          <Auth isProfile={true}>
            <Profile></Profile>
          </Auth>
        </Route>
        <Route path='/signin'>
          <Auth>
            <Login></Login>
          </Auth>
        </Route>
        <Route path='/signup'>
          <Auth>
            <Register />
          </Auth>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
      {isFooterDisable ? '' : <Footer></Footer>}
    </div>
  );
};
export default App;
