// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { ME } from '../keys';

const UserContext = createContext();
const initialState = {
  user: {
    username: '',
    email: '',
    language: '',
    displayName: '',
    tagline: '',
    contactNo: '',
    category: '',
    gender: 0,
    picture: ME,
    overview: '',
    addressLine: '',
    state: '',
    zipCode: '',
    country: '',
    facebook: '',
    dribble: '',
    twitter: '',
    likedin: '',
    behance: '',
  },
  isLoggedIn: false,
};
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {


  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: { ...state.user, ...action.payload }, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: initialState.user, isLoggedIn: false };
    default:
      return state;
  }
};
