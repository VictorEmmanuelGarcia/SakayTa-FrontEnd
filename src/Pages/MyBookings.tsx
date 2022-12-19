import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../reservation.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';

function MyBookings(this: any) {
    return (
        <div className="App">
        <ResponsiveAppBar/>
        <div className = "reservation__content" >
                <div className = "reservation__cards">
                <Stack direction="row" spacing={20}>
                        <article className='reservation__card'>
                            <h1>Main Information</h1>
                            <h4>22 December 2022, Thursday</h4>
                            <h4>1 person</h4>
                            <h4>Airconditioned</h4>
                            <h4>Librando</h4>
                            <h4>31 seats</h4>
                            <h4>Php 180</h4>
                            <h1>Schedule</h1>
                            <h4>6:00 AM South Bus Terminal</h4>
                            <h5>6:30 AM Pardo</h5>
                            <h5>7:00 AM Naga</h5>
                            <h5>7:30 AM Carcar</h5>
                            <h4>8:00 AM Dalaguete</h4>
                            <h4>Travel Time: 2 hours</h4>
                        </article>
                        <div>
                            <h1 style={{display:'flex', marginTop: "65px"}}>Payment Method</h1>
                            <Link to='/reservation'>
                            <Stack direction="column" spacing={2}>
                            <Button variant="outlined"  size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 30, top: 20, width: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>GCash</Button>
                            <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 30, top: 20, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Maya</Button>
                            <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 50, top: 20, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Pay on the go</Button>
                            </Stack>
                            </Link>
                        </div>
                    </Stack>
                </div>
        </div>
        <div style={{marginTop: "-30px"}}>
        <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
        </div>
    );
  }
  
  export default MyBookings;