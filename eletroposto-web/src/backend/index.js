import axios from 'axios';
// import { Container } from './style
const api = axios.create({
    baseURL: 'https://carro-eletrico.firebaseio.com/postos.json',
})

axios.get().then(res => {
    console.log(res)
})

export default api;