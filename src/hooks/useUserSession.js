import React from 'react'
import { useUserContext } from '../context/UserContext';
import { PreferencesKeys, getItem } from '../preferences/Preferences';
import { getSetUser, validateUser } from '../helpers';
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const useUserSession = () => {
    const { state, dispatch } = useUserContext();
    const location = useLocation();
    const user = state;
    const toLogin = (message = '') => {
        // history.push({ pathname: `/` });
    };
    const toDashboard = async (token) => {
        await getSetUser(dispatch, token)
        // const lastRoute = await getItem(PreferencesKeys.lastRoute);
        // if (lastRoute?.pathname) history.push({ pathname: lastRoute.pathname });
        // else history.push({ pathname: `/` });
    }
    React.useEffect(() => {
        const unlisten = history.listen((location, action) => {
            // Perform actions when the location changes
            console.log('Location changed:', location.pathname, action);
            // You can add your logic or dispatch actions here
        });

        // Cleanup the listener when the component unmounts
        return () => {
            unlisten();
        };
    }, [history]);
    React.useEffect(
        () => {
            const asyncHandler = async () => {
                const { isValid, message, token } = await validateUser(dispatch, history);
                if (isValid) await toDashboard(token);
                else toLogin(message);
            }
            asyncHandler();
        },
        []);
    return user;
}
export default useUserSession
