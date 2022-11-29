import axios from "axios";

const PASSENGER_BASE_URL = "http://localhost:8080/passenger";

class PassengerService {
  getPassengers() {
    return axios.get(PASSENGER_BASE_URL+"/getAllPassenger");
  }

  getPassengerByUsername(username: string) {
    return axios.get(PASSENGER_BASE_URL+"/getUsername"+"?username="+username);
  }
  
} 

export default new PassengerService();