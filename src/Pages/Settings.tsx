import React from 'react';
import logo from './logo.svg';
import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/sidebar';
import { Stack, TextField, Button } from '@mui/material';
import Footer from '../components/garcia/garciaFooter';
import Namebar from '../components/enriquez/namebar';
import { Link } from 'react-router-dom';

function Settings(){
    return (
        <div className="Settings">
        <ResponsiveAppBar/>
        <Sidebar/>
        <Namebar/>
            <div className="Settings-bar" style={{display: "flex"}}>
                <Stack direction="column" spacing={2}>
                    <Button variant="outlined"  size="large" sx={{borderColor:'#CA7715', color: 'black', width: 500, bottom: 30, top: 30, left: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Payment Details</Button>
                    <Link to='/reservationhistory'>
                    <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', width: 500, bottom: 30, top: 30, left: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Reservations</Button>
                    </Link>
                    <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 50, top: 30, left: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Transaction History</Button>
                </Stack>
            </div>
            
            <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
        </div>
        );
}

export default Settings;