import React from 'react';
import '../schedule.css';
import { Link } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';


const showsearch: React.FC = () =>{
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
                            <Link to='/reservation'>
                            <Button variant="contained" style={{backgroundColor:'black', justifyContent: 'right', fontWeight:"750", width: "105px", height: "60px"}}>Reserve</Button>
                            </Link>
                            </div>
                        </article>
                </div>
        </div>
        <Footer name="Victor Emmanuel F. Garcia & Andre G. Enriquez" course="BSCS" section="F1 & F2"/>
        </div>
        );
}

export default showsearch;
