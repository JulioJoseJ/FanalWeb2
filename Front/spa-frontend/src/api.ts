import axios from 'axios'

const api = axios.create({
  baseURL :'http://localhost:400',
});

export default api;