import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  return <Route
    {...rest}
    render={(props) =>
      isLoggedIn ?
        <Component {...props} />
        :
        <Redirect to='/login' />
    }
  />
};
export default ProtectedRoute;
