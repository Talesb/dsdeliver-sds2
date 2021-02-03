import axios from "axios"


const API_URL = 'https://tales-sds2.herokuapp.com';


export default function fetchOrders() {
    return axios(`${API_URL}/orders`);
}