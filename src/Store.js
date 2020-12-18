import React, { createContext, useReducer } from "react";

const initialState = {
  test: 0,
};
const StateStore = createContext(initialState);
const { Provider } = StateStore;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_TEST_VALUE":
        return {
          ...state,
          test: action.payload.value,
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { StateStore, StateProvider };
