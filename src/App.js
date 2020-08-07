import React from 'react';
import Header from './components/Header'
import Game from './components/Game'
import Footer from './components/Footer'

function App() {

  return (
    <div className="outerContainer">
      <div className="container">
        <Header />
        <Game />
      </div>
      <Footer />
    </div>
  );
}

export default App;