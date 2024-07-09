import React, { createContext, useReducer } from 'react';

const initialState = {
};

const stateReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
