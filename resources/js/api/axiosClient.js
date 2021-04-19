import axios from 'axios';
import queryString from 'query-string';
import { useSelector } from 'react-redux';
import baseUrl from './baseUrl';


const axiosClient = axios.create(

    {
  baseURL: baseUrl,

  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
     config.headers['Accept'] = 'application/json';
    return config;
},
error => {
    Promise.reject(error)
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
      }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;