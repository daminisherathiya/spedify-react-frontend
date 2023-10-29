import React from 'react'
import { useLocation } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { PreferencesKeys, getItem, setItem } from '../preferences/Preferences';
import { validateUser } from '../helpers';
const userSession = () => {
    const { state } = useUserContext();
    const location = useLocation();
    const user = state;
    const history = useHistory();
    const toLogin = async (message = '') => {
        // if (message) await user_logout(message);
        history.push({ pathname: `/login` });
    };
    const toDashboard = async () => {
        const lastRoute = await getItem(PreferencesKeys.lastRoute);
        console.log('[lastRoute]', lastRoute);
        if (lastRoute?.pathname) history.push({ pathname: lastRoute.pathname });
        else history.push({ pathname: `/` });
    }
    React.useEffect(() => {
        if (location.pathname === `/login` || location.pathname === '/') return;
        else setItem(PreferencesKeys.lastRoute, location);
    }, [location])
    React.useEffect(
        () => {
            const asyncHandler = async () => {
                const { isValid, message } = await validateUser();
                if (isValid) toDashboard(isValid);
                else toLogin(message);
            }
            if (user.isLoggedIn === false) toLogin();
            else asyncHandler();
        },
        [user.isLoggedIn]);
    return user;
}
export default userSession
