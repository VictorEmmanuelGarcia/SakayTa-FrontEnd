import React from 'react';
import logo from './logo.png';
import './App.css';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Carsex po</h1>
        <Footer name="Victor Emmanuel F. Garcia" course="BSCS" section="F1"/>
      </header>
    </div>
  );
}

export default App;
