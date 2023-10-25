// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Define your initial state and reducer for managing user sessions.
  const initialState = {
    user: null,
    isLoggedIn: false,
  };

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
      return { ...state, user: action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
};
