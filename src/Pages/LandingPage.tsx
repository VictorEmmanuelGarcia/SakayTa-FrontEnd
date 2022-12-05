import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import '../App.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function LandingPage(){
    return (
        <div><ResponsiveAppBar/>
        <div className = 'row landing'>
            <div className = "textcenter">
                <h1 style={{fontSize:'130px', fontFamily: 'Helvetica',}}>SakayTa</h1>
                <h2 style={{display:'flex', fontFamily: 'Helvetica', justifyContent:'center', alignItems:'center'}}>"Enjoy the comfort of travelling."</h2>
                    <div className = 'buttoncenter' style={{display:'flex', fontFamily: 'Helvetica', justifyContent:'center', alignItems:'center'}}>
                    <Link to='/home'>
                    <Button variant="contained" style={{backgroundColor:'black',  alignItems:"center", fontFamily: 'Helvetica' }}>Get Started</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage