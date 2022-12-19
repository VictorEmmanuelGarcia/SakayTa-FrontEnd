import { Button, Stack, TextField } from '@mui/material';
import React from 'react';
import Namebar from '../components/enriquez/namebar';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function ReservationBus(this: any) {
    return (
        <div className="reservation">
        <ResponsiveAppBar/>
            <div className="Settings-bar" style={{display: "flex"}}>
                <Stack direction="row" spacing={5}>
                    <Namebar/>
                    <Namebar/>
                    <Button variant="outlined" size="large" sx={{borderColor:'#CA7715', color: 'black', bottom: 50, top: 30, left: 500, borderRadius:2, fontWeight:"600", ":hover": {backgroundColor: '#F79110', borderColor: '#F79110', color: 'white'}}}>Transaction History</Button>
                </Stack>
            </div>
        </div>
    );
  }
  
  export default ReservationBus;