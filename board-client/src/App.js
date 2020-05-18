import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer, Body } from './components';
import './App.css';

function App(props) {
  console.log('props : ', props);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
