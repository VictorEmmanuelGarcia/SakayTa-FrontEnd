import React from 'react';
import logo from './logo.svg';
import '../App.css';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';
import Sidebar from '../components/sidebar';
import { Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Profile(){
    const navigate = useNavigate();

    const goToUpdate = () => {
    alert("Are you sure you want to update your account?");
    navigate('/profile');
    };

    const goToDelete = () => {
    alert("Are you sure you want to delete your account?");
    navigate('/');
    };
    
    return (
    <div className="Profile">
    <ResponsiveAppBar/>
    <Sidebar/>
        <div className="Profile-settings">
            <Stack direction="row" spacing={2}>
                <TextField id="outlined-basic" label="First name" variant="outlined" sx={{bottom: 30, top: -250, left: 280, borderRadius:20}} defaultValue="Victor Magtanggol" />
                <TextField id="outlined-basic" label="Last name" variant="outlined" sx={{bottom: 30, top: -250, left: 280,borderRadius:20}} defaultValue="Garcia"/>
            </Stack>
            <Stack direction="column" spacing={2}>
            <TextField id="outlined-basic" label="Email" variant="outlined" sx={{bottom: 30, top: -235, left: 280, width: 468, borderRadius:20}} defaultValue="victormagtanggolgarcia@gmail.com"/>
                <TextField id="outlined-basic" label="Username" variant="outlined" sx={{bottom: 30, top: -235, left: 280, width: 468, borderRadius:20}} defaultValue="victorMagtanggol123"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" sx={{bottom: 30, top: -235, left: 280, width: 468, borderRadius:20}} defaultValue="aldub4Ever" type={"password"}/>
                <TextField id="outlined-basic" label="Confirm password" variant="outlined" sx={{bottom: 30, top: -235, left: 280, width: 468, borderRadius:20}} defaultValue="aldub4Ever" type={"password"} />
                </Stack>
        </div>
        <div className="Buttons-profile">
            <Stack direction="row" spacing={2}>
                <Button className="update" variant="contained" size="large" sx={{bottom: 30, top: -200, left: 290, borderRadius:20, backgroundColor:'#F79110', fontWeight:"600",     '&:hover': {
                backgroundColor: '#fff',
                color: '#f79110',
                }}} onClick={goToUpdate}>Update account</Button>
                <Button variant="outlined" size="large" color="error" sx={{bottom: 30, top: -200, left: 320, borderRadius:20, fontWeight:"600"}} onClick={goToDelete}>Delete account</Button>
            </Stack>
        </div>
        <Footer name="Victor Emmanuel F. Garcia" course="BSCS" section="F1"/>

    </div>
    );
}

export default Profile;