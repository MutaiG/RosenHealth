import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AuthCtx { isAuthenticated: boolean; login: (at: string, rt: string) => void; logout: () => void; }
const Ctx = createContext<AuthCtx | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuth] = useState(() => !!localStorage.getItem('rh_access_token'));

  const login = useCallback((at: string, rt: string) => {
    localStorage.setItem('rh_access_token', at);
    localStorage.setItem('rh_refresh_token', rt);
    setAuth(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('rh_access_token');
    localStorage.removeItem('rh_refresh_token');
    setAuth(false);
  }, []);

  return <Ctx.Provider value={{ isAuthenticated, login, logout }}>{children}</Ctx.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
