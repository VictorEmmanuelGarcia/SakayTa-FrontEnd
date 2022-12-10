import { Stack, TextField, Button } from "@mui/material";
import Footer from "../../garcia/garciaFooter";
import ButtonOption from "../ButtonOptions";


function ReadTicket(){
    return(
        <div className="ReadTicket">           
        <ButtonOption/>

        <div className="display-ticket"> 
            <Stack direction="column" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
              <TextField id="outlined-basic" label="Ticket ID" variant="outlined" sx={{width: 475, borderRadius:20}}/>
              <Button variant="contained" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Search</Button>
            </Stack>
        </div>  

          <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )

}

export default ReadTicket;
