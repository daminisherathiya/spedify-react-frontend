import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

const AuthRoute = ({ children }) => {
  const { state } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  if (isLoggedIn) {
    return <Navigate to={`/`} replace />
  }
  return children

};
export default AuthRoute;
