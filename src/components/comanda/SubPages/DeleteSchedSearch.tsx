import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


function DeleteSchedule(){
    const navigate = useNavigate();
    const goToDelete = () => {
        alert("Are you sure you want to delete this ticket?");
        navigate('/schedules/readschedules');
        };
        
    return(
        <div className="DeleteSchedule">
        <ResponsiveAppBar/>    
        <h1>Schedule Management</h1>  
        <ButtonOption/>

        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"} height="10vh">
            <TextField id="departure-time" label="Bus Number" variant="outlined" sx={{width: 500, borderRadius:20}} defaultValue="10"/>
        </Stack>
        <Stack direction="row" spacing={3} display="flex" alignItems="center" justifyContent={"center"}>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}}>Search</Button>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 235, fontWeight:"600"}} onClick={goToDelete}>Delete</Button>
        </Stack>

        <div className = "schedule__content" >
                <div className = "schedule__cards">
                        <article className='schedule__card'>
                        <h2>Bus ID: 10</h2>
                            <h4>Schedule ID: 4</h4>
                            <h4>Location: CSBT</h4> 
                            <h4>Destination: Carcar</h4>
                            <h4>Time: 10:00 AM - 11:00 PM</h4>
                            <h4>Schedule Date: December 23, 2022</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            </Stack>
                            </div>
                        </article>
                </div>
        </div>

        <Footer name="Johniel Comanda" course="BSCS" section="F2"/>
        </div>
    )
}

export default DeleteSchedule;
