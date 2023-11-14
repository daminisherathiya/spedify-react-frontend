import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import config from "config";
import { useEnumsContext } from './context/EnumsContext.jsx';
import Axios from './Axios.js';
import Loader from './components/loader';
import { ToastContainer } from 'react-toastify';
const AppRouter = (props) => {
    const { dispatch } = useEnumsContext();
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
            <Router basename={`${config.publicPath}`}>
                <Route render={(props) => <AppContainer {...props} />} />
            </Router>
            <NotificationContainer />
        </>
    );

}


export default AppRouter;