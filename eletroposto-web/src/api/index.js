import React from 'react';
import axios from 'axios';
// import { Container } from './style
const api = axios.create({
    baseURL: 'https://carro-eletrico.firebaseio.com/unidades.json',
})
export default api;