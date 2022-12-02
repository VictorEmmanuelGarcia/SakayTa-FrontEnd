import React from 'react';
import logo from './logo.svg';
import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';
import Sidebar from '../components/sidebar';
import { Button, Stack, TextField } from '@mui/material';

function Profile(){
    return (
    <div className="Profile">
    <ResponsiveAppBar/>
    <Sidebar/>
        <div className="Profile-settings">
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="First name" variant="outlined" sx={{bottom: 30, top: -250, left: 280,borderRadius:20}} />
                <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{bottom: 30, top: -250, left: 280,borderRadius:20}} />
            </Stack>
            <Stack direction="column" spacing={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{bottom: 30, top: -235, left: 280, borderRadius:20}} />
                <TextField id="outlined-basic" label="Username" variant="outlined" sx={{bottom: 30, top: -235, left: 280, borderRadius:20}} />
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{bottom: 30, top: -235, left: 280, borderRadius:20}} />
                <TextField id="outlined-basic" label="Confirm password" variant="outlined" sx={{bottom: 30, top: -235, left: 280,borderRadius:20}} />
                </Stack>
        </div>
        <div className="Buttons-profile">
            <Stack direction="row" spacing={2}>
                <Button className="update" variant="contained" size="large" sx={{bottom: 30, top: -200, left: 290, borderRadius:20, backgroundColor:'#F79110', fontWeight:"600"}}>Update account</Button>
                <Button variant="outlined" size="large" color="error" sx={{bottom: 30, top: -200, left: 320, borderRadius:20, fontWeight:"600"}}>Delete account</Button>
            </Stack>
        </div>
        <Footer name="Victor Emmanuel F. Garcia" course="BSCS" section="F1"/>

    </div>
    );
}

export default Profile;