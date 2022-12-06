import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/garcia/garciaFooter';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HomePage from './Pages/HomePage';
import ReadTicket from './Services/ReadTicket'

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <ReadTicket></ReadTicket>
    </div>
  );
}

export default App;
