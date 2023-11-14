import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route, Routes, useLocation, } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import config from "config";
import { useEnumsContext } from './context/EnumsContext.jsx';
import Axios from './Axios.js';
import Loader from './components/loader';
import { ToastContainer } from 'react-toastify';
import Header from "./components/header";
import Footer from "./components/footer";
const AppRouter = (props) => {
    const { dispatch } = useEnumsContext();
    const location = useLocation();
    const getEnums = async () => {
        const response = await Axios.get('/api/v1/enums');
        dispatch({ type: "SET_ENUMS", payload: response.data.enums })
    }
    React.useEffect(() => {
        getEnums();
    }, [])
    return (
        <>
            <Loader />
            <ToastContainer />
            <Header {...props} location={location} />
            <AppContainer />
            <Footer {...props} location={location} />
            <NotificationContainer />
        </>
    );

}


export default AppRouter;