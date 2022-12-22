import { Stack, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ButtonOption from "../components/comanda/ButtonOptions";
import Footer from "../components/garcia/garciaFooter";
import ResponsiveAppBar from "../components/ResponsiveAppBar";



function ReadSchedule(){
    const navigate = useNavigate();
    const goToDelete = () => {
        alert("Are you sure you want to delete this ticket?");
        navigate('/schedules/readschedules');
    };
    const goToUpdate = () => {
        navigate('/schedules/updateschedule');
    };

    return(
        <div className="ReadSchedule">
        <ResponsiveAppBar/>
        <h1>Schedule Management</h1>             
        <ButtonOption/>

        <div className="Schedule-input"> 
            <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
              <TextField id="outlined-basic" label="Location" variant="outlined" defaultValue="CSBT" />
              <TextField id="outlined-basic" label="Destination" variant="outlined" defaultValue="Carcar"/>
              <Button variant="contained" style={{backgroundColor:'#F79110', fontWeight:"600"}}>Search</Button>
            </Stack>
        </div>    
        
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
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}} onClick={goToUpdate}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}} onClick={goToDelete}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                </div>
            </div>

          <Footer name="Johniel Comanda_Test" course="BSCS" section="F2"/>
        </div>
    )

}

export default ReadSchedule;
