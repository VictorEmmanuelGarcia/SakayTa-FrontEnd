import { ClassNames } from '@emotion/react';
import { CenterFocusStrong, HelpCenter } from '@mui/icons-material';
import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import TabsOption from '../components/comanda/Tabs';
import ButtonLink from '../components/comanda/temp';
import Footer from '../components/garcia/garciaFooter';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Sidebar from '../components/sidebar';

function Schedules(){
    let clicked = false;
    return (
        <div className="ManageSchedule">

            <TabsOption/>

        </div>
    )
}

export default Schedules;
