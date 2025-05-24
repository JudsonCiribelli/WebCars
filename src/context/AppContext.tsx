import { createContext } from "react";

interface AppContextProps {
  isLogin: boolean;
}
export const AppContext = createContext<AppContextProps>({
  isLogin: false,
});
