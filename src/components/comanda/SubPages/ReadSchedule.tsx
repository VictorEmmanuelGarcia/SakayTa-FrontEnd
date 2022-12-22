import { Stack, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../garcia/garciaFooter";
import ResponsiveAppBar from "../../ResponsiveAppBar";
import ButtonOption from "../ButtonOptions";


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
              <TextField id="outlined-basic" label="Location" variant="outlined" />
              <TextField id="outlined-basic" label="Destination" variant="outlined" />
              <Link to='/schedules/findschedule'>
              <Button variant="contained" style={{backgroundColor:'#F79110', fontWeight:"600"}}>Search</Button>
              </Link>
            </Stack>
        </div>    
        
        <div className = "schedule__content" >
                <div className = "schedule__cards">
                        <article className='schedule__card'>
                            <h2>Bus ID: 34</h2>
                            <h4>Schedule ID: 1</h4>
                            <h4>Location: CSBT</h4>
                            <h4>Destination: Barili</h4>
                            <h4>Time: 10:30 AM - 12:00 PM</h4>
                            <h4>Schedule Date: December 23, 2002</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}} onClick={goToUpdate}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}} onClick={goToDelete}>Delete</Button>
                            </Stack>
                            </div>
                        </article>

                        <article className='schedule__card'>
                            <h2>Bus ID: 22</h2>
                            <h4>Schedule ID: 2</h4>
                            <h4>Location: CSBT</h4> 
                            <h4>Destination: Dalaguete</h4>
                            <h4>Time: 12:00 PM - 3:30 PM</h4>
                            <h4>Schedule Date: December 23, 2022</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                        
                        <article className='schedule__card'>
                            <h2>Bus ID: 21</h2>
                            <h4>Schedule ID: 3</h4>
                            <h4>Location: CSBT</h4> 
                            <h4>Destination: Santander</h4>
                            <h4>Time: 1:00 PM - 4:30 PM</h4>
                            <h4>Schedule Date: December 23, 2022</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>

                        <article className='schedule__card'>
                        <h2>Bus ID: 10</h2>
                            <h4>Schedule ID: 4</h4>
                            <h4>Location: CSBT</h4> 
                            <h4>Destination: Carcar</h4>
                            <h4>Time: 10:00 AM - 11:00 PM</h4>
                            <h4>Schedule Date: December 23, 2022</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>

                        <article className='schedule__card'>
                        <h2>Bus ID: 2</h2>
                            <h4>Schedule ID: 5</h4>
                            <h4>Location: CSBT</h4> 
                            <h4>Destination: Santander</h4>
                            <h4>Time: 10:30 AM - 2:00 PM</h4>
                            <h4>Schedule Date: December 23, 2022</h4>
                            <div className="list-button" style={{display:'flex', justifyContent:'right'}}>
                            <Stack direction="row" spacing={2}>
                            <Button variant="contained" style={{backgroundColor:'green', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Update</Button>
                            <Button variant="contained" style={{backgroundColor:'red', justifyContent: 'center', fontWeight:"750", width: "105px", height: "60px"}}>Delete</Button>
                            </Stack>
                            </div>
                        </article>
                </div>
            </div>

          <Footer name="Johniel Comanda" course="BSCS" section="F2"/>
        </div>
    )

}

export default ReadSchedule;
