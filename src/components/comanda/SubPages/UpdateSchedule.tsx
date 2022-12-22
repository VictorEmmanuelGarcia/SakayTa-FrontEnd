import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function UpdateSchedule(){
    const navigate = useNavigate();
    const goToUpdatedSched = () => {
          navigate('/schedule/readschedules');
        };

    return(
        <div className="UpdateSchedule">
        <ResponsiveAppBar/>   
        <h1>Schedule Management</h1>  
        <ButtonOption/>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="location" label="Location" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="CSBT" />
            <TextField id="destination" label="Destination" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="Barili" />
        </Stack>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"} height="10vh">
            <TextField id="date" label="Date" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="December 23, 2002
" />
            <TextField id="departure-time" label="Departure Time" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="10:30 AM " />
        </Stack>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <TextField id="bus-number" label="Bus Number" variant="outlined" sx={{width: 475, borderRadius:20}} defaultValue="34" />
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}} onClick={goToUpdatedSched}>Update Schedule</Button>
        </Stack>

        <Footer name="Johniel Comanda" course="BSCS" section="F2"/>
        </div>
    )
}

export default UpdateSchedule;
