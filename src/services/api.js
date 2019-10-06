import axios from 'axios';

const api = axios.create({
    //obrigatório se chamar baseURL para axios entender.
    baseURL: 'https://backendwithnode.herokuapp.com/'
});

export default api;