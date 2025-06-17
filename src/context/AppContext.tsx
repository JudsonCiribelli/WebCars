import { createContext } from "react";

type AppContextProps = {
  signed: boolean;
  loadingAuth: boolean;
};
export const AppContext = createContext({} as AppContextProps);
