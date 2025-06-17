import { onAuthStateChanged } from "firebase/auth";
import { type ReactNode, useEffect, useState } from "react";

import { auth } from "../services/firebaseConection";
import { AppContext } from "./AppContext";

interface AppContextProdiverProps {
  children: ReactNode;
}
export interface UserContextProps {
  name: string | null;
  uid: string;
  email: string | null;
}
export const AppContextProvider = ({ children }: AppContextProdiverProps) => {
  const [user, setUser] = useState<UserContextProps | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user?.displayName,
          email: user?.email,
        });
        setLoadingAuth(false);
      } else {
        setUser(null);
        setLoadingAuth(false);
      }
    });

    return () => {
      unSub();
    };
  }, []);

  const handleInfoUser = ({ name, email, uid }: UserContextProps) => {
    setUser({
      name,
      uid,
      email,
    });
  };
  return (
    <AppContext.Provider
      value={{ signed: !!user, loadingAuth, handleInfoUser, user }}
    >
      {children}
    </AppContext.Provider>
  );
};
