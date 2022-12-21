import { Stack, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/garcia/garciaFooter";
import ResponsiveAppBar from "../components/ResponsiveAppBar";


function FindTicket(){
    const navigate = useNavigate();
    const goToDelete = () => {
        alert("Are you sure you want to delete this ticket?");
        navigate('/ticket/deletedticket');
        };

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
                            <h2>Ticket ID: 4</h2>
                            <h4>Reservation ID: 4</h4>
                            <h4>Destination: Dalaguete</h4>
                            <h4>Time: 6:00 AM - 9:00 AM</h4>
                            <h4>Payment ID: null</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}} onClick={goToDelete}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                </div>
            </div>
          <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default FindTicket;
