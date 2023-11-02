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
    address: {
      addressLine: '',
      state: '',
      zipCode: '',
      country: '',
    },
    socialLinks: {
      facebook: '',
      dribble: '',
      twitter: '',
      likedin: '',
      behance: '',
    },
  },
  isLoggedIn: false,
};
export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Define your initial state and reducer for managing user sessions.


  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const userReducer = (state, action) => {
  // Implement your user session management logic in this reducer.
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: { ...state.user, ...action.payload }, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: initialState.user, isLoggedIn: false };
    default:
      return state;
  }
};
