import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ConfirmationPopup from '../ConfirmationPopup/ConfirmationPopup';

const App = () => {
  const location = useLocation();
  const [isFooterDisable, setIsFooterDisable] = useState(false);
  const routesFootersDisabled = ['/signin', '/signup', '/profile', '/404'];
  const [isHeaderDisable, setIsHeaderDisable] = useState(false);
  const routesHeaderDisabled = ['/404'];

  useEffect(() => {
    if (routesHeaderDisabled.includes(location.pathname)) {
      setIsHeaderDisable(true);
    }
    if (routesFootersDisabled.includes(location.pathname)) {
      setIsFooterDisable(true);
    }
  }, [location.pathname]);
  return (
    <div className='App'>
      {isHeaderDisable ? '' : <Header />}
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
        <Route>
          <Redirect to='/404' />
          <NotFound />
        </Route>
      </Switch>
      {isFooterDisable ? '' : <Footer></Footer>}
      <InfoTooltip
        name='infoTooltip'
        isSuccess={true}
        message={''}
        isOpen={false}
        onClose={() => {}}
      />
      <ConfirmationPopup
        name='confirmation'
        isOpen={false}
        onSubmit={() => {}}
        onClose={() => {}}
      />
    </div>
  );
};
export default App;
