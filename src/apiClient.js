import Axios from 'axios';
import { BASE_URL } from './keys';
Axios.interceptors.request.use(
    config => {
        config.baseURL = BASE_URL;
        const user = localStorage.getItem("@user") ? JSON.parse(localStorage.getItem("@user")) : false;
        console.log('axios.user', user);
        if (user) {
            config.headers['Authorization'] = `Bearer ${user.token}`;
        }
        return config;
    },

    function (error) {
        return Promise.reject(error)
    });

Axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    const { response } = error;
    if (response && response.status && response.status === 500) {
        console.log(response.request)
    }
    return Promise.reject(error);
});
export default Axios;
