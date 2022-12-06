import { Stack, TextField, Button } from "@mui/material";
import Footer from "../../garcia/garciaFooter";
import ButtonOption from "../ButtonOptions";


function ReadSchedule(){
    return(
        <div className="ReadSchedule">           
        <ButtonOption/>

        <div className="Schedule-input"> 
            <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
              <TextField id="outlined-basic" label="Location" variant="outlined" />
              <TextField id="outlined-basic" label="Destination" variant="outlined" />
              <TextField id="outlined-basic" label="Date" variant="outlined" />
              <Button variant="contained" style={{backgroundColor:'#F79110', fontWeight:"600"}}>Search</Button>
            </Stack>
        </div>  

          <Footer name="Johniel Comanda_Test" course="BSCS" section="F2"/>
        </div>
    )

}

export default ReadSchedule;
