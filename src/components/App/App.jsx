import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';
import Login from '../Login/Login';
import Register from '../Register/Register';

const App = () => {
  return (
    <div className='App'>
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
          <Auth>
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
      </Switch>
      <Footer></Footer>
    </div>
  );
};
export default App;
