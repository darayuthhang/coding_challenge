import axios from 'axios';
let url = 'http://localhost:5000/api/v1'
const instance = axios.create({
    baseURL: url,
});

export default instance;
