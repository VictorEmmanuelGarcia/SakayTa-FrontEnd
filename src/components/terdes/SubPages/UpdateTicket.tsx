import { Stack, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function UpdateTicket(){
    return(
        <div className="UpdateTicket">
        <ResponsiveAppBar/>    
        <h1>Ticket Management</h1>   
        <Stack direction="column" spacing={2.5} display="flex" alignItems="center" justifyContent={"center"} marginTop="10px">
            <TextField id="outlined-basic" label="Ticket ID" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="5"/>
                <TextField id="outlined-basic" label="Reservation ID" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="5"/>
                <TextField id="outlined-basic" label="Payment ID" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="null"/>
                <Link to='/ticket/updatedticket'>
                <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Update Ticket</Button>
                </Link>
                </Stack>

        <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default UpdateTicket;
