import { Stack, TextField, Button } from "@mui/material";
import Footer from "../garcia/garciaFooter";
import Buttons from "./Buttons";

function ReadPayment(){
        return(
            <div className="ReadPayment">  
            <Buttons/>
            <div className="Payment-input"> 
                <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
                  <TextField id="outlined-basic" label="Payment ID" variant="outlined" />
                  <Button variant="contained" style={{float: 'left', backgroundColor:'#F79110', fontWeight:"600", cursor: 'pointer'}}>Search</Button>
                </Stack>
            </div>  
    
              <Footer name="Jane Carla Barcoma" course="BSCS" section="F2"/>
            </div>
        )
    
}export default ReadPayment;