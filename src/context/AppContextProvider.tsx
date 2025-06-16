import React, { useState } from "react";

import { AppContext } from "./AppContext";

interface AppContextProdiverProps {
  children: React.ReactNode;
  setLogin: () => false;
}
export const AppContextProvider = ({ children }: AppContextProdiverProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const setLogin = () => {
    setIsLogin(true);
  };
  return (
    <AppContext.Provider value={{ isLogin, setLogin }}>
      {children}
    </AppContext.Provider>
  );
};
