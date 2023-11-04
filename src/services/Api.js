import Axios from '../Axios';
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
        console.log('[Post].error', error);
        throw error;
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
        console.log('[Get].error', error);
        throw error;
    } finally {
        loaderHanlder(false)
    }
}

export {
    Post,
    Get
}
