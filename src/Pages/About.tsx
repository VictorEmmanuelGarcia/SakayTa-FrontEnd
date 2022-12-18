import { Opacity } from "@mui/icons-material";
import { Box, Button, Card, Grid, TextField } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";


export default function About() {
    return (
        <>
        <div>
            <ResponsiveAppBar/>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',


        }}>
            <Card sx={{ marginTop:5, height: 500,minWidth: '1400px', backgroundColor: '#FFFFFF', borderRadius: '25px', alignItems: 'center'}}>
                <Box
                sx={{
                display: 'inline-block',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                m: 0.3,
                },
                }}>
                    <div>
                    <img src={'/assets/about.jpg'} alt="picture1" width={650} height={500} style={{marginRight:10, float: "left"}}/>
                    </div>
                <div style={{ marginLeft:'700px', marginTop:'50px', height: 650, paddingRight: '20px', paddingLeft:'50px', borderRadius: '30px', minWidth: '1px'}}>
                    <div>
                        <h1>ABOUT US</h1>
                    </div>
                    <div style={{ textAlign: 'left', padding: '20px', fontSize: '30px'}}>This system is a bus reservation system designed to help commuters and the problem of difficulty in commuting.
                In this way users can reserve a seat in a bus and know the different schedules of buses.
                This was designed by students who felt the need for a service for easing public transportation in their own way.
                    </div>
                </div>
                </Box>
            </Card>
        </div>
        </>
            );
    }