import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../reservation.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';
import Sidebar from '../components/sidebar';
import Namebar from '../components/enriquez/namebar';

function MyBookings(this: any) {
    return (
        <div className="Settings">
        <ResponsiveAppBar/>
        <Sidebar/>
        <div  style={{marginLeft: "-5cm"}}>
        <Namebar/>
            <div className="Settings-bar" style={{display: "flex"}}>
                <Stack direction="column" spacing={3}>
                <h1 style={{color: 'black', width: 1200, bottom: 30, top: 30, right: 100,fontWeight:"700"}}>My Bookings</h1>
                <h1 style={{color: 'black', width: 2000, bottom: 30, top: 30, right: 50, fontWeight:"649.5", fontSize: "25px"}}>You have no bookings yet.</h1>
                <Link to='/schedulelist'>
                    <Button variant="contained" style={{backgroundColor:'black', bottom: 50, top: 30, left: 940, borderRadius:2, fontWeight:"750", width: "150px", height: "60px"}}>Reserve Now</Button>
                </Link>
                </Stack>
            </div>
            </div>
            <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
    );
  }
  
  export default MyBookings;