import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function DeleteSchedule(){
    const navigate = useNavigate();
    const goToSearch = () => {
          navigate('/schedule/findschedule');
        };
        
    return(
        <div className="DeleteSchedule">
        <ResponsiveAppBar/>    
        <h1>Schedule Management</h1>  
        <ButtonOption/>

        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"} height="10vh">
            <TextField id="departure-time" label="Bus Number" variant="outlined" sx={{width: 500, borderRadius:20}} />
        </Stack>
        <Stack direction="row" spacing={3} display="flex" alignItems="center" justifyContent={"center"}>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}} onClick={goToSearch} >Search</Button>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}}>Delete</Button>
        </Stack>

        <Footer name="Johniel Comanda" course="BSCS" section="F2"/>
        </div>
    )
}

export default DeleteSchedule;
