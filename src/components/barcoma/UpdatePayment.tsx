import { Stack, TextField, Button, Divider } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import Footer from "../garcia/garciaFooter";
import Buttons from "./Buttons";


function UpdatePayment(){

    return(
        <div className="UpdatePayment">
        <label
            style={{
                position: "relative",
                top: "300px",
                left: "500px",
                paddingTop: "10px",
                textAlign: "right",
                fontWeight:"600"}}>
        <input
          type="checkbox"
        />
        On-Site Payment
        </label>
        
        <label
            style={{
                position: "relative",
                top: "300px",
                left: "800px",
                paddingTop: "10px",
                textAlign: "right",
                fontWeight:"600"}}>
        <input
          type="checkbox"
        />
        Online Payment
        </label>
        <Buttons/>
        <Stack
            direction="row"
            display="flex" color="#F79110" alignItems="center" alignContent={"center"} justifyContent={"center"}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={20}
            paddingTop = "0px"
            paddingBottom = "100px"
            >
            <h3>Payment ID: </h3>
            <h3>Passenger ID:</h3>
            <h3>Reservation ID:</h3>
            </Stack>
        <Stack direction="row" spacing={5} height="10vh" alignItems="center" justifyContent={"center"}>
            <TextField id="amount" label="Amount" variant="outlined" sx={{width: 475, borderRadius:20}} />
        </Stack>
        <Stack direction="row" spacing={5} display="flex" alignItems="center" justifyContent={"center"}>
            <Button variant="contained" size="large" style={{backgroundColor:'#F79110', width: 475, fontWeight:"600"}}>Update Payment</Button>
        </Stack>

        <Footer name="Jane Carla Barcoma" course="BSCS" section="F2"/>
        </div>
    )
}

export default UpdatePayment;
