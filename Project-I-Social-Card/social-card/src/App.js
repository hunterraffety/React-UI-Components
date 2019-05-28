import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

library.add(faComment);

const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
