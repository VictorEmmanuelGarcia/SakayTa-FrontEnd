import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../history.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';
import Sidebar from '../components/sidebar';
import Namebar from '../components/enriquez/namebar';

function ReservationHistory2(this: any) {

    const navigate = useNavigate();

    const goToChange = () => {
        alert("Are you sure you want to change your reservation?");
        navigate('/changereservation');
        };

    const goToCancel = () => {
        alert("Are you sure you want to cancel your reservation?");
        navigate('/mybookings');
        };

    return (
        <div className="Settings">
        <ResponsiveAppBar/>
        <Sidebar/>
        <div  style={{marginLeft: "-5cm"}}>
        <Namebar/>
            <div className="Settings-bar" style={{display: "flex"}}>
                <Stack direction="column" spacing={3}>
                <h1 style={{color: 'black', width: 1200, bottom: 30, top: 30, right: 100,fontWeight:"700"}}>My Bookings</h1>
                <div className = "history__cards">
                <article className='history__card'>
                            <h3>22 December 2022</h3>
                            <h5>12:00 PM - 3:30PM</h5>
                            <h5>Starmall to Santander</h5>
                            <div className="list-button" style={{display:'flex', justifyContent:'center'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "40px", marginBottom: "10px"}} onClick={goToChange}>Change</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "40px", marginBottom: "10px", marginRight: "10px"}} onClick={goToCancel}>Cancel</Button>
                            </Stack>
                            </div>
                </article>
                </div>
                </Stack>
            </div>
            </div>
            <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
    );
  }
  
  export default ReservationHistory2;