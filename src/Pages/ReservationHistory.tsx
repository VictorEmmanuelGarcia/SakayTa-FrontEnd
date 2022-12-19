import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../history.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';
import Sidebar from '../components/sidebar';
import Namebar from '../components/enriquez/namebar';

function ReservationHistory(this: any) {
    return (
        <div className="Settings">
        <ResponsiveAppBar/>
        <Sidebar/>
        <Namebar/>
            <div className="Settings-bar" style={{display: "flex"}}>
                <Stack direction="column" spacing={3}>
                <h1 style={{color: 'black', width: 1200, bottom: 30, top: 30, right: 100,fontWeight:"700"}}>My Bookings</h1>
                <div className = "history__cards">
                <article className='history__card'>
                            <h3>22 December 2022</h3>
                            <h5>6:00 AM - 9:00 AM</h5>
                            <h5> South Bus Terminal to Dalaguete</h5>
                </article>
                </div>
                </Stack>
            </div>
            <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
    );
  }
  
  export default ReservationHistory;