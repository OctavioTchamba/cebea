"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  signup: (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => Promise<{ ok: boolean; message: string }>;
  logout: () => Promise<void>;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch(`${BASE_URL}/user/me`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch {
        // sem sessão
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const signup = async (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => {
    try {
      const res = await fetch(`${BASE_URL}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });
      const data = await res.json();
      return { ok: res.ok, message: data.message };
    } catch {
      return { ok: false, message: "Erro de conexão com o servidor." };
    }
  };

  const login = async (email: string, password: string) => {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || "Erro ao fazer login");
    }

    const data = await res.json();
    setUser(data.user);

    // Mantém compatibilidade com o padrão cred.user.getIdToken()
    return {
      user: {
        ...data.user,
        getIdToken: async () => "cookie-based-auth",
      },
    };
  };

  const logout = async () => {
    try {
      await fetch(`${BASE_URL}/user/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {}
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}