import React from 'react';
import '../schedule.css';
import { Link } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import Footer from '../components/garcia/garciaFooter';


const changereservation: React.FC = () =>{
    return (
        <div className="App">
        <ResponsiveAppBar/>
        
        <div className = "schedule__content" >
                <div className = "schedule__cards">
                        <article className='schedule__card'>
                            <h2> Sugbo Transit </h2>
                            <h4>12:00 PM Starmall</h4>
                            <h4>3:30 PM Santander</h4>
                            <h4>Php200</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Link to='/changebus'>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Choose</Button>
                            </Link>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2> Ceres </h2>
                            <h4>10:30 AM Anjo World</h4>
                            <h4>12:00 AM Barili</h4>
                            <h4>Php150</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Link to='/reservation'>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Choose</Button>
                            </Link>
                            </div>
                        </article>
                        
                        <article className='schedule__card'>
                            <h2> Sunrays </h2>
                            <h4>5:00 PM Gaisano Basak</h4>
                            <h4>7:00 PM Pinamungajan</h4>
                            <h4>Php180</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Link to='/reservation'>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Choose</Button>
                            </Link>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2> Librando </h2>
                            <h4>6:00 AM South Bus Terminal</h4>
                            <h4>9:00 AM Dalaguete</h4>
                            <h4>Php180</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Link to='/reservation'>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Choose</Button>
                            </Link>
                            </div>
                        </article>

                </div>
        </div>
        <Footer name="Andre G. Enriquez" course="BSCS" section="F1 & F2"/>
        </div>
        );
}

export default changereservation;
