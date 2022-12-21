import { Stack, TextField, Button } from "@mui/material";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function UpdateTicket(){
    return(
        <div className="UpdateTicket">
        <ResponsiveAppBar/>
        <ButtonOption/>
        <Stack direction="column" spacing={3} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="ticket-id" label="Ticket ID" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <TextField id="reservation-id" label="Reservation ID" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <TextField id="payment-id" label="Payment ID" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Update Ticket</Button>
        </Stack>

        <Footer name="Jose Felip Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default UpdateTicket;
