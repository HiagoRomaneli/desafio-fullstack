import { createContext } from "react";

export const ClientsContext = createContext({});

export const ClientsProvider: React.FC<any> = ({ children }) => {
  return (
    <ClientsContext.Provider value={{}}>{children}</ClientsContext.Provider>
  );
};
