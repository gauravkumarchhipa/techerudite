import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.7.81.243:3253/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
