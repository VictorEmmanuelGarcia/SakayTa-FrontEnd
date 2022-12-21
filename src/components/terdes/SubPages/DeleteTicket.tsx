import { Stack, TextField, Button } from "@mui/material";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function DeleteTicket(){
    return(
        <div className="DeleteTicket">
        <ResponsiveAppBar/>
        <ButtonOption/>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"} height="10vh">
            <TextField id="ticket-number" label="Ticket ID" variant="outlined" sx={{width: 500, borderRadius:20}} />
        </Stack>
        <Stack direction="row" spacing={3} display="flex" alignItems="center" justifyContent={"center"}>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}}>Search</Button>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}}>Delete</Button>
        </Stack>

        <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default DeleteTicket;
