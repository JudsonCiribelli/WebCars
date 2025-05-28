import { createContext } from "react";

interface AppContextProps {
  isLogin: boolean;
  setLogin: () => void;
}
export const AppContext = createContext<AppContextProps>({
  isLogin: false,
  setLogin: () => {},
});
