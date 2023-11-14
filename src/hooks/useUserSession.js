import React from 'react'
import { useUserContext } from '../context/UserContext';
import { PreferencesKeys, getItem, setItem } from '../preferences/Preferences';
import { getSetUser, validateUser } from '../helpers';
import { useLocation } from 'react-router-dom'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const useUserSession = () => {
    const { state, dispatch } = useUserContext();
    const location = useLocation();
    const user = state;
    const toHome = (message = '') => {
        history.push({ pathname: `/` });
    };
    const toDashboard = async (token) => {
        await getSetUser(dispatch, token)
        const lastRoute = await getItem(PreferencesKeys.lastRoute);
        if (lastRoute?.pathname) history.push({ pathname: lastRoute.pathname });
        else history.push({ pathname: `/` });
    }
    React.useEffect(() => {
        // if (location.pathname === '/' || location.pathname.split('/')[1] === 'login') return;
        setItem(PreferencesKeys.lastRoute, location)
    }, [location])
    React.useEffect(
        () => {
            const asyncHandler = async () => {
                const { isValid, message, token } = await validateUser(dispatch, history);
                if (isValid) await toDashboard(token);
                else toHome(message);
            }
            asyncHandler();
        },
        []);

    return user;
}
export default useUserSession
