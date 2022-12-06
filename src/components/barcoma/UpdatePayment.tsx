import { Stack, TextField, Button } from "@mui/material";
import Footer from "../garcia/garciaFooter";
import Buttons from "./Buttons";


function UpdatePayment(){
    return(
        <div className="UpdatePayment">
            
        <Buttons/>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="location" label="Location" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <TextField id="destination" label="Destination" variant="outlined" sx={{width: 475, borderRadius:20}} />
        </Stack>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"} height="10vh">
            <TextField id="date" label="Date" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <TextField id="departure-time" label="Departure Time" variant="outlined" sx={{width: 475, borderRadius:20}} />
        </Stack>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="bus-number" label="Bus Number" variant="outlined" sx={{width: 475, borderRadius:20}} />
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Update Schedule</Button>
        </Stack>

        <Footer name="Johniel Comanda_Test" course="BSCS" section="F2"/>
        </div>
    )
}

export default UpdatePayment;
