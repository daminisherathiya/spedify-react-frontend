import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PreferencesKeys, setItem } from './preferences/Preferences';

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    console.log('[ProtectedRoute].isLoggedIn', isLoggedIn);
  // const location = useLocation();
  // setItem(PreferencesKeys.lastRoute, location)
  // React.useEffect(() => {
  //   console.log('[ProtectedRoute].isLoggedIn', isLoggedIn);
  // }, [isLoggedIn])

  return <Route
    {...rest}
    render={(props) =>
      isLoggedIn ?
        (<Component {...props} />)
        : <Redirect to='/login' />
    }
  />
};

export default ProtectedRoute;
