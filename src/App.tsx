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
import DeletePayment from './components/barcoma/DeletePayment';
import Ticket from './Pages/Ticket';
import CreateTicket from './components/terdes/SubPages/CreateTicket';
import ReadTicket from './components/terdes/SubPages/ReadTicket';
import UpdateTicket from './components/terdes/SubPages/UpdateTicket';
import DeleteTicket from './components/terdes/SubPages/DeleteTicket';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ReservationBus from './Pages/ReservationBus';
import ScheduleList from './Pages/ScheduleList';
import MyBookings from './Pages/MyBookings';
import ReservationPayment from './Pages/ReservationPayment';
import ReservationHistory from './Pages/ReservationHistory';
import ShowSearch from './Pages/ShowSearch';
import AdminPage from './Pages/AdminPage';
import ChangeReservation from './Pages/ChangeReservation';
import ChangeBus from './Pages/ChangeBus';
import TicketReservation from './Pages/TicketReservation';
import ChangeBusTicket from './Pages/ChangeBusTicket';
import DeletedTicket from './Pages/DeletedTicket';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/home" element={<ScheduleList/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>

        <Route path="/reservation" element={<ReservationBus/>}/>
        <Route path="/mybookings" element={<MyBookings/>}/>
        <Route path="/reservationpayment" element={<ReservationPayment/>}/>
        <Route path="/ticketreservation" element={<TicketReservation/>}/>
        <Route path="/reservationhistory" element={<ReservationHistory/>}/>
        <Route path="/showsearch" element={<ShowSearch/>}/>
        <Route path="/changereservation" element={<ChangeReservation/>}/>
        <Route path="/changebus" element={<ChangeBus/>}/>
        <Route path="/changebusticket" element={<ChangeBusTicket/>}/>

        <Route path="/schedulelist" element={<ScheduleList/>}/>
        <Route path="/schedules" element={<Schedules/>}/>
        <Route path="/schedules/createschedule" element={<CreateSchedule/>}/>
        <Route path="/schedules/readschedule" element={<ReadSchedule/>}/>
        <Route path="/schedules/updateschedule" element={<UpdateSchedule/>}/>
        <Route path="/schedules/deleteschedule" element={<DeleteSchedule/>}/>

        <Route path="/payment/readpayment" element={<ReadPayment/>}/>
        <Route path="/payment/updatepayment" element={<UpdatePayment/>}/>
        <Route path="/payment/deletepayment" element={<DeletePayment/>}/>

        <Route path="/ticket" element={<Ticket/>}/>
        <Route path="/ticket/readticket" element={<ReadTicket/>}/>
        <Route path="/deletedticket" element={<DeletedTicket/>}/>
      </Routes>
    </Router>
  );
}

export default App;
