import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Movies></Movies>
      <Footer></Footer>
    </div>
  );
};
export default App;
