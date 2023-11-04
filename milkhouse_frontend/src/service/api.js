import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, API_ENDPOINTS } from '../constants/config';
import shadows from '@mui/material/styles/shadows';

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
       return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
   if(response?.status === 200 || response?.status === 201){
       return {isSuccess: true, data: response.data};
   }
    return {
      isFalure: true, 
      status: response?.status,
      msg: response?.message || 'Something went wrong',
      code: response?.code,
     };
}

const processError = async (error) => {
  if (error.response) {
      // Request made and server responded with a status code 
      // that falls out of the range of 2xx
      if (error.response?.status === 403) {
          // const { url, config } = error.response;
          // console.log(error);
          // try {
          //     let response = await API.getRefreshToken({ token: getRefreshToken() });
          //     if (response.isSuccess) {
                  sessionStorage.clear();
          //         setAccessToken(response.data.accessToken);

          //         const requestData = error.toJSON();

          //         let response1 = await axios({
          //             method: requestData.config.method,
          //             url: requestData.config.baseURL + requestData.config.url,
          //             headers: { "content-type": "application/json", "authorization": getAccessToken() },
          //             params: requestData.config.params
          //         });
          //     }
          // } catch (error) {
          //     return Promise.reject(error)
          // }
      } else {
          console.log("ERROR IN RESPONSE: ", error.toJSON());
          return {
              isError: true,
              msg: API_NOTIFICATION_MESSAGES.responseFailure,
              code: error.response.status
          }
      }
  } else if (error.request) { 
      // The request was made but no response was received
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
          isError: true,
          msg: API_NOTIFICATION_MESSAGES.requestFailure,
          code: ""
      }
  } else { 
      // Something happened in setting up the request that triggered an Error
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
          isError: true,
          msg: API_NOTIFICATION_MESSAGES.networkError,
          code: ""
      }
  }
}

const API = {
    
};

for(const [key,value] of Object.entries(API_ENDPOINTS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) => {
       axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: 'json',
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    showUploadProgress(Math.round(progressEvent.loaded/progressEvent.total*100));
                }
              },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    showDownloadProgress(Math.round(progressEvent.loaded/progressEvent.total*100));
                }
        }
            
       })
    }
}

export { API};

