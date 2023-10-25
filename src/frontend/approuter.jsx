import React from 'react';
import AppContainer from './appcontainer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// notifications
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import config from "config";
import { UserProvider } from '../context/UserContext.jsx';

const AppRouter = (props) => {
    return (
        <>
            <Router basename={`${config.publicPath}`}>
                <Route render={(props) => <UserProvider> <AppContainer {...props} />  </UserProvider>} />
            </Router>
            <NotificationContainer />
        </>
    );

}


export default AppRouter;