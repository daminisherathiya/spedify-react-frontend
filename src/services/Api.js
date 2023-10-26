import Axios from 'axios';
import { getItem, setItem, PreferencesKeys } from '../preferences/Preferences';
import { BASE_URL } from '../keys';
Axios.interceptors.request.use(
    config => {
        config.baseURL = `${BASE_URL}`;
        const { token } = getItem(PreferencesKeys.authKey) || false;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token.authToken;
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
        setItem(PreferencesKeys.axiosErrKey, { error: response, url: response.config.url })
    }
    return Promise.reject(error);
});
export default Axios;
