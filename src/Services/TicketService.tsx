import axios from "axios";

const TICKET_BASES_URL = "http://localhost:8080/ticket/getAllTickets";

class TicketService {
    static getAllTickets() {
        throw new Error('Method not implemented.');
    }
    getAllTickets() {
        return axios.get(TICKET_BASES_URL);
    }
}


export default TicketService;