import React, { Component } from 'react';
import TicketService from './TicketService';

class ReadTicket extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ticket: []
        }
    }

    componentDidMount() {
        TicketService.getAllTickets().then((res) => {
            this.setState({ tickets: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2>List of all Ticket</h2>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>Ticket Id</th>
                                <th>Ticket Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ticket.map(
                                    ticket =>
                                        <tr key={ticket.ticketId}>
                                            <td>{ticket.ticketType}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ReadTicket;