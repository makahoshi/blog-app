import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',

});
//you can also add headers
//instance.defaults.headers.common['Authorization'] = 'Auth token here';
//instance.defaults.headers.post['Content-Type'] = 'application-json';

export default instance;