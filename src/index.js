import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//setting up baseurl  with default

axios.defaults.baseURL = `https://jsonplaceholder.typicode.com`;
//you can also add headers
//axios.defaults.headers.common['Authorization'] = 'Auth token here';
//axios.defaults.headers.post['Content-Type'] = 'application-json';

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error)
});
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
