import React from 'react';
import ButtonOption from '../components/terdes/ButtonOptions';
import Footer from '../components/garcia/garciaFooter';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

function Ticket(){
    let clicked = false;
    return (
        <div className="ManageTicket">
            <ResponsiveAppBar/>
            <ButtonOption/>
            <Footer name="Jose Felipe Terdes" course="BSCS" section="F2"/>
        </div>
    )
}

export default Ticket;
