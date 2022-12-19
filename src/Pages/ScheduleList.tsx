import React from 'react';
import '../schedule.css';
import { Stack, TextField, Button } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';


const schedule: React.FC = () =>{
    return (
        <div className="App">
        <ResponsiveAppBar/>
        <h1>Reserve a Seat</h1>
        <h4 style={{fontWeight:100}}>SakayTa Bus Reservation System is a system that reserves a bus and is a wonderful system with handsome</h4>
          <div className="Bus-input" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Stack direction="row" spacing={2}>
              <TextField id="start-location" label="Location" variant="outlined" />
              <TextField id="end-destination" label="Destination" variant="outlined" />
              <Button variant="contained" style={{backgroundColor:'#F79110', fontWeight:"600"}}>Search</Button>
              </Stack>
          </div>
        
        <div className = "schedule__content" >
                <div className = "schedule__cards">
                        <article className='schedule__card'>
                            <h2> Librando </h2>
                            <h4>6:00 AM South Bus Terminal</h4>
                            <h4>9:00 AM Dalaguete</h4>
                            <h4>Php180</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Button variant="contained" style={{backgroundColor:'black', justifyContent: 'right', fontWeight:"750", width: "105px", height: "60px"}}>Reserve</Button>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2> Sugbo Transit </h2>
                            <h4>12:00 PM Starmall</h4>
                            <h4>3:30 PM Santander</h4>
                            <h4>Php200</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Button variant="contained" style={{backgroundColor:'black', justifyContent: 'right', fontWeight:"750", width: "105px", height: "60px"}}>Reserve</Button>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2> Ceres </h2>
                            <h4>10:30 AM Anjo World</h4>
                            <h4>12:00 AM Barili</h4>
                            <h4>Php150</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Button variant="contained" style={{backgroundColor:'black', justifyContent: 'right', fontWeight:"750", width: "105px", height: "60px"}}>Reserve</Button>
                            </div>
                        </article>
                        
                        <article className='schedule__card'>
                            <h2> Sunrays </h2>
                            <h4>5:00 PM Gaisano Basak</h4>
                            <h4>7:00 PM Pinamungajan</h4>
                            <h4>Php180</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Button variant="contained" style={{backgroundColor:'black', justifyContent: 'right', fontWeight:"750", width: "105px", height: "60px"}}>Reserve</Button>
                            </div>
                        </article>

                </div>
        </div>
        </div>
        );
}

export default schedule;
