import axios from 'axios';

const API_URL = 'http://localhost:2000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error); // Fix the syntax here
    }
  );

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response);
    },
    function(error){
       return Promise.reject(processError(response))
    }
)
