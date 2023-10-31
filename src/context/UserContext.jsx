// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { BASE_URL, ME } from '../keys';

const UserContext = createContext();
const initialState = {
  user: {
    language: '',
    username: '',
    email: '',
    displayName: '',
    tagline: '',
    contactNo: '',
    category: '',
    gender: 0,
    pictures: [{ path: ME }],
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
      return { ...state, user: { ...state.user, ...action.payload, pictures: action.payload.pictures ? action.payload.pictures[0].files.map((file, index) => ({ ...file, path: `${BASE_URL}/${file.path}` })) : initialState.user.pictures }, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, user: initialState.user, isLoggedIn: false };
    default:
      return state;
  }
};
