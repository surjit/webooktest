import axios from 'axios';

const httpClient = axios.create({
    baseURL: '/',
    timeout: 3000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
});

// interceptor to catch errors
const errorInterceptor = error => {
    // all the error responses
    if (error.response) {
        switch (error.response.status) {
            case 302:
                console.log('Error 302');
                return;
            case 400:
                console.log('Error 400');
                break;
            case 401: // authentication error, logout the user
                console.log('Please login again', 'Session Expired');
                break;
            default:
                console.log(error.response.status, error.message);
        }
    }

    try {
        console.log(error);
        console.log(error.response);
    } catch (err) {
        console.log(err);
    }
    return Promise.reject(error);
};

// Interceptor for responses
const responseInterceptor = response => {
    switch (response.status) {
        case 200:
            // yay!
            break;
        // any other cases
        default:
        // default case
    }

    return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

httpClient.interceptors.request.use(req => {
    return req;
}, error => {
    console.log(error);
});

export default httpClient
