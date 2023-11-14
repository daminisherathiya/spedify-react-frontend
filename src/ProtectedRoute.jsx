import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from './context/UserContext';
import { PreferencesKeys, setItem } from './preferences/Preferences';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  setItem(PreferencesKeys.lastRoute, location)
  const { state } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  if (!isLoggedIn) {
    return <Navigate to={`/login`} replace />
  }
  return children
};
export default ProtectedRoute;
