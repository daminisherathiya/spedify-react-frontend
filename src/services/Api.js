import Axios from '../Axios';
const Post = async (url = '', payload = {}, headers = {}) => {
    try {
        const response = await Axios.post(`${url}`, payload, { headers: { ...headers } });
        return response.data;
    } catch (error) {
        console.log('[Post].error', error);
        throw error;
    }
}
const Get = async (url = '', headers = {}) => {
    try {
        const response = await Axios.get(`${url}`, { headers: { ...headers } });
        return response.data;
    } catch (error) {
        console.log('[Get].error', error);
        throw error;
    }
}

export {
    Post,
    Get
}