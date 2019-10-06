import axios from 'axios';

const api = axios.create({
    //obrigatório se chamar baseURL para axios entender.
    baseURL: 'http://localhost:3333'
});

export default api;