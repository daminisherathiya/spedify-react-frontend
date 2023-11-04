import React, { createContext, useContext, useReducer } from 'react';

const LoaderContext = createContext();

export const useLoaderContext = () => {
    return useContext(LoaderContext);
};

export const LoaderProvider = ({ children }) => {
    const initialState = {
        isLoading: false
    };

    const [loaderState, loaderDispatch] = useReducer(loaderReducer, initialState);

    return (
        <LoaderContext.Provider value={{ loaderState, loaderDispatch }}>
            {children}
        </LoaderContext.Provider>
    );
};

const loaderReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
