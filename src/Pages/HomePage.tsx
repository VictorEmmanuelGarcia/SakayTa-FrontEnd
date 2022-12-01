import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Footer from '../components/garcia/garciaFooter';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function HomeApp() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <h1>Reserve a Seat</h1>
        <h4 style={{fontWeight:100}}>SakayTa Bus Reservation System is a system that reserves a bus and is a wonderful system with handsome</h4>
        <Footer name="Victor Emmanuel F. Garcia" course="BSCS" section="F1"/>
    </div>
  );
}

export default HomeApp;