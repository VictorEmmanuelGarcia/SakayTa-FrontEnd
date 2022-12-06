import React from 'react';
import './App.css';
import Footer from './components/garcia/garciaFooter';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './Pages/Settings';
import LandingPage from './Pages/LandingPage';
import CreateSchedule from './components/comanda/SubPages/CreateSchedule';
import DeleteSchedule from './components/comanda/SubPages/DeleteSchedule';
import ReadSchedule from './components/comanda/SubPages/ReadSchedule';
import UpdateSchedule from './components/comanda/SubPages/UpdateSchedule';
import Schedules from './Pages/Schedules';
import ReadPayment from './components/barcoma/ReadPayment';
import UpdatePayment from './components/barcoma/UpdatePayment';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/schedules" element={<Schedules/>}/>
        <Route path="/schedules/createschedule" element={<CreateSchedule/>}/>
        <Route path="/schedules/readschedule" element={<ReadSchedule/>}/>
        <Route path="/schedules/updateschedule" element={<UpdateSchedule/>}/>
        <Route path="/schedules/deleteschedule" element={<DeleteSchedule/>}/>
        <Route path="/payment/readpayment" element={<ReadPayment/>}/>
        <Route path="/payment/updatepayment" element={<UpdatePayment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
