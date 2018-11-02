import * as axios from 'axios';

export const API = {
    apiURL: 'http://localhost:3000',
    products: {
        url: '/ProductCollection ',
    }
}

export const apiProducts = () => 
    axios({
        method: 'get',
        url: `${API.apiURL}${API.products.url}`,
    });