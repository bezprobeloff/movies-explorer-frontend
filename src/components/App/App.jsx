import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from '../Main/Main';

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
        <Route path='/profile'></Route>
        <Route path='/signin'></Route>
        <Route path='/signup'></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};
export default App;
