import Axios from 'axios';
import { BASE_URL } from './keys';
import { PreferencesKeys, getItem } from './preferences/Preferences';
Axios.interceptors.request.use(
   async config => {
        config.baseURL = BASE_URL;
        const authKey = await getItem(PreferencesKeys.authKey) || false;
        // console.log('axios.authKey', authKey);
        if (authKey) {
            config.headers['Authorization'] = `Bearer ${authKey.token}`;
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
