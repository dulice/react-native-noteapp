import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  lists: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, lists: [...state.lists, action.payload] };
    case "UPDATE_LIST":
      const updateList = state.lists.map((list) => {
        if (list.id === action.payload.id) {
          return action.payload;
        }
        return list;
      });
      return { ...state, lists: updateList };
    case "DELTE_LIST":
      return {
        ...state,
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
