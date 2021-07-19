import axios from 'axios'

export const fetchProducts = q => axios.get('/api/v1/products/trending?sortBy='+ q);
