import { Stack, TextField, Button } from "@mui/material";
import Footer from "../../garcia/garciaFooter";
import ButtonOption from "../ButtonOptions";

function CreateTicket(){
    return(
        <div className="CreateTicket">
            
        <ButtonOption/>
        <Stack direction="column" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="reservation-id" label="Reservation ID" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <TextField id="payment-id" label="Payment ID" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Create Ticket</Button>
        </Stack>
        <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default CreateTicket;
