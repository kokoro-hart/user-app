import { createContext, Dispatch, SetStateAction, ReactNode, useState } from "react";

import { User } from "@/types/api";

export type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | undefined;
  setLoginUser: Dispatch<SetStateAction<LoginUser | undefined>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
  const [loginUser, setLoginUser] = useState<LoginUser | undefined>(undefined);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
