import React from 'react'
import { useUserContext } from '../context/UserContext';
// import { useHistory } from 'react-router-dom';
import { PreferencesKeys, getItem } from '../preferences/Preferences';
import { getSetUser, validateUser } from '../helpers';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const userSession = () => {
    const { state, dispatch } = useUserContext();
    const user = state;
    // const history = useHistory();
    const toLogin = (message = '') => {
        history.push({ pathname: `/` });
    };
    const toDashboard = async (token) => {
        await getSetUser(dispatch, token)
        const lastRoute = await getItem(PreferencesKeys.lastRoute);
        if (lastRoute?.pathname) history.push({ pathname: lastRoute.pathname });
        else history.push({ pathname: `/` });
    }
    React.useEffect(
        () => {
            const asyncHandler = async () => {
                const { isValid, message, token } = await validateUser(dispatch, history);
                if (isValid) await toDashboard(token);
                else toLogin(message);
            }
            // if (user.isLoggedIn === false) toLogin();
            asyncHandler();
        },
        []);
    return user;
}
export default userSession
