import Axios from '../Axios';
import { toast,  } from 'react-toastify';
const catchError = (error) => {
    console.log('[catchError].error', error);
    const errorData = error?.response?.data ?? null;
    if (errorData) {
        errorData.errors.map((err, idx) => toast(`${err.message}`))
    }
    throw error;

}
const loaderHanlder = (isLoading = true) => {
    const loader = document.getElementById("global-loader");
    loader.style.display = isLoading ? 'flex' : 'none'
}
const Post = async (url = '', payload = {}, headers = {}) => {
    try {
        loaderHanlder();
        const response = await Axios.post(`${url}`, payload, { headers: { ...headers } });
        return response.data;
    } catch (error) {
        // console.log('[Post].error', error);
        catchError(error)
    } finally {
        loaderHanlder(false)
    }
}
const Get = async (url = '', headers = {}) => {
    try {
        loaderHanlder();
        const response = await Axios.get(`${url}`, { headers: { ...headers } });
        return response.data;
    } catch (error) {
        // console.log('[Get].error', error);
        catchError(error)
    } finally {
        loaderHanlder(false)
    }
}

export {
    Post,
    Get
}
