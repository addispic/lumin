import React, { createContext, ReactNode, useContext, useState } from "react";

// definitions
import { IUser } from "../definitions/users.definitions";

// data
import usersData from "../data/users.data.json";

type AuthContextType = {
  users: IUser[];
  user: IUser | null;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  // states
  const [users, setUsers] = useState<IUser[]>(usersData);
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <AuthContext.Provider value={{ users, user, setUsers, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
