'use client'

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { makeUserCase } from '@/core/factories/makeUserCases';
import { User } from '@/core/domain/entities/User';


// Define the context type
interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  register: (email: string, pass: string) => Promise<boolean>;
}

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const userUseCases = makeUserCase();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }
  }, [])


  const login = async (email: string, pass: string) => {
    const foundUser = await userUseCases.loginUser.execute({ email, password: pass });
    if (foundUser) {
      const {id, email} = foundUser
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify({id, email}))
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = async (email: string, pass: string) => {
    const existingUser = await userUseCases.findByEmail.execute({ email })
    if (existingUser) {
      return false;
    }
    await userUseCases.registerUser.execute({email, password: pass })
    return true;
  };

    return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }
  return context;
}