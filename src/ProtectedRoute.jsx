import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PreferencesKeys, setItem } from './preferences/Preferences';
import { useUserContext } from './context/UserContext';
import { useLoaderContext } from './context/LoaderContext';

const ProtectedRoute = ({ children }) => {
  const loader = document.getElementById("global-loader");
  console.log('Loader', loader?.style?.display);
  const location = useLocation();
  setItem(PreferencesKeys.lastRoute, location)
  const { state } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  if (isLoggedIn) return children
  return null
};
export default ProtectedRoute;
