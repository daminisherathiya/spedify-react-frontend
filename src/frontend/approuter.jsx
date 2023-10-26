import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// notifications
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import config from "config";
import { UserProvider } from '../context/UserContext.jsx';
import { EnumsProvider, useEnumsContext } from '../context/EnumsContext.jsx';
import '../preferences/Preferences.js'
import Axios from '../apiClient.js';
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
            <Router basename={`${config.publicPath}`}>
                <Route render={(props) => <UserProvider> <AppContainer {...props} />  </UserProvider>} />
            </Router>
            <NotificationContainer />
        </>
    );

}


export default () => <EnumsProvider> <AppRouter /></EnumsProvider>;