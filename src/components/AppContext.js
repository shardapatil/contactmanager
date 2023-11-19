import { createContext, useReducer, useContext } from 'react';
const AppContext = createContext();

const initialState = {
  isLoggedIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };

    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
