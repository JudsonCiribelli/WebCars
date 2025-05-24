import React, { useState } from "react";

import { AppContext } from "./AppContext";

interface AppContextProdiverProps {
  children: React.ReactNode;
}
export const AppContextProvider = ({ children }: AppContextProdiverProps) => {
  const [isLogin] = useState(false);
  return (
    <AppContext.Provider value={{ isLogin }}>{children}</AppContext.Provider>
  );
};
