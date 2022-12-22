import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../reservation.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';

function AdminPage(this: any) {
    return (
        <div className="App">
        <ResponsiveAppBar/>
        <div className = "reservation__content" >
                <div className = "reservation__cards">
                <h1 style={{display:'flex', marginTop: "65px", justifyContent:'center', alignItems:'center'}}>Admin Access</h1>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Stack direction="column" spacing={2}>
                            <Link to='/payment'>
                            <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 30, top: 20, width: 900, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Payment</Button>
                            </Link>
                            <Link to='/schedules/readschedule'>
                            <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 50, top: 20, width: 900, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Schedule</Button>
                            </Link>
                            <Link to='/ticket/readticket'>
                            <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 50, top: 20, width: 900, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Ticket</Button>
                            </Link>
                            </Stack>
                        </div>
                </div>
        </div>
        <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
    );
  }
  
  export default AdminPage;