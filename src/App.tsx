import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/garcia/garciaFooter';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
