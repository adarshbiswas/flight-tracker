import { createContext } from "react";

const GlobalContext = createContext();

const baseURL = "https://api.aviationstack.com/v1/flights";

export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
