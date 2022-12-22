import { ClassNames } from '@emotion/react';
import { CenterFocusStrong, HelpCenter } from '@mui/icons-material';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import ButtonOption from '../components/comanda/ButtonOptions';
import Footer from '../components/garcia/garciaFooter';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/sidebar';

function Schedules(){
    let clicked = false;
    return (
        <div className="ManageSchedule">
            <ResponsiveAppBar/>
            <ButtonOption/>
            <Footer name="Johniel Comanda_Test" course="BSCS" section="F2"/>
        </div> 
    )
}

export default Schedules;
