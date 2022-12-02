import React from 'react';
import logo from './logo.svg';
import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/sidebar';
import { Stack, TextField, Button } from '@mui/material';
import Footer from '../components/garcia/garciaFooter';

function Settings(){
    return (
        <div className="Settings">
        <ResponsiveAppBar/>
        <Sidebar/>
            <div className="Settings-bar">
                <Stack direction="column" spacing={2}>
                    <Button variant="outlined"  size="large" sx={{bottom: 30, top: -235, left: 280, borderRadius:20, fontWeight:"600"}}>Payment Details</Button>
                    <Button variant="outlined" size="large" sx={{bottom: 30, top: -235, left: 280, borderRadius:20, fontWeight:"600"}}>Reservations</Button>
                    <Button variant="outlined" size="large" sx={{bottom: 30, top: -235, left: 280, borderRadius:20, fontWeight:"600"}}>Transaction History</Button>
                </Stack>
            </div>
            <Footer name="Andre G. Enriquez" course="BSCS" section="F2"/>
    
        </div>
        );
}

export default Settings;