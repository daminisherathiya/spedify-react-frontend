import React, { createContext, useContext, useReducer } from 'react';

const EnumsContext = createContext();

export const useEnumsContext = () => {
    return useContext(EnumsContext);
};

export const EnumsProvider = ({ children }) => {
    const initialState = {};

    const [state, dispatch] = useReducer(enumsReducer, initialState);

    return (
        <EnumsContext.Provider value={{ state, dispatch }}>
            {children}
        </EnumsContext.Provider>
    );
};

const enumsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ENUMS':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
