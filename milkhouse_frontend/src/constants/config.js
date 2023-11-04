export const API_NOTIFICATION_MESSAGES ={
    loading: {
       title: 'Loading...',
         message: 'Please wait while we load the data'
    },
    success: {
        title: 'Success',
        message: 'Data fetched successfully'
    },
    responseError: {
        title: 'Error',
        message: 'An error occured while fetching data' 

    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing data'


    },
    networkError: {
        title: 'Error',
        message: 'Unable to connect to the server'

    },

}

// API Endpoints

export const API_ENDPOINTS = {
    userSignup: {url:'/signup', meathod: 'POST'},
    // userSignin: {url:'/signin', meathod: 'POST'},
}