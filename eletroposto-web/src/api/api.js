import axios from 'axios';

const api = axios.create({
    baseURL: 'https://carro-eletrico.firebaseio.com/'
})

export default api;