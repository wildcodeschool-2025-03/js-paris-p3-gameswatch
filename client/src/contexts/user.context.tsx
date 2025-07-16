import { type ReactNode, createContext, useContext, useState } from "react";
import type { User } from "../types/vite-env";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const value = useContext(UserContext);
  if (value === null) {
    throw new Error("useUser doit etre utiliser dans un provider");
  }
  return value;
}
