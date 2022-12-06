import React from 'react';
import ".Pages/ManageTicketSearch.css";

type Ticket = {
    ticketId: number;
    ticketType: string;
}

let ticket: Ticket = {
    ticketId: 1,
    ticketType: "VIP"
}


function ManageTicketSearch() {
    return (
        <div>
            <input className="buttonstyle" type="button" value="Tickets"></input>
        </div>
    );
}

export default ManageTicketSearch;

//1: Make SamplePage.tsx under the Page folder
//2: If ganahan ka magdesign sa imohang page, naa kay SamplePage.css niya import sa SamplePage.tsx
//3: Import SamplePage.tsx sa App.tsx nga file
//   <SamplePage></SamplePage>