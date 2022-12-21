import { Stack, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../components/garcia/garciaFooter";
import ResponsiveAppBar from "../components/ResponsiveAppBar";


function DeletedTicket(){
    return(
        <div className="ReadTicket">        
        <ResponsiveAppBar/>
        <div className="display-ticket"> 
        <h1>Ticket Management</h1>   
            <Stack direction="column" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
              <TextField id="outlined-basic" label="Ticket ID" variant="outlined" sx={{width: 475, borderRadius:20}}/>
              <Button variant="contained" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Search</Button>
            </Stack>
        </div>  

        <div className = "schedule__content" >
                <div className = "schedule__cards">
                            <article className='schedule__card'>
                            <h2>Ticket ID: 1</h2>
                            <h4>Reservation ID: 1</h4>
                            <h4>Destination: Barili</h4>
                            <h4>Time: 10:30 AM - 12:00 PM</h4>
                            <h4>Payment ID: 1</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2>Ticket ID: 2</h2>
                            <h4>Reservation ID: 2</h4>
                            <h4>Destination: Dalaguete</h4>
                            <h4>Time: 6:00 AM - 9:00 AM</h4>
                            <h4>Payment ID: 2</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                        
                        <article className='schedule__card'>
                            <h2>Ticket ID: 3</h2>
                            <h4>Reservation ID: 3</h4>
                            <h4>Destination: Santander</h4>
                            <h4>Time: 12:00 PM - 3:30 PM</h4>
                            <h4>Payment ID: 3</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2>Ticket ID: 5</h2>
                            <h4>Reservation ID: 5</h4>
                            <h4>Destination: Santander</h4>
                            <h4>Time: 12:00 PM - 3:30 PM</h4>
                            <h4>Payment ID: null</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Link to='/ticket/updateticket'>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            </Link>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                </div>
            </div>
          <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )

}

export default DeletedTicket;
