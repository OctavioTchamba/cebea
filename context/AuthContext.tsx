'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import api from '@/service/api';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<User> => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      throw new Error('Informe email e senha para continuar.');
    }

    try {
      console.log('[AuthContext] Fazendo requisição de login...');
      const response = await fetch('https://cebea-railway-production.up.railway.app/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: normalizedEmail,
          password: normalizedPassword,
        }),
      });
      console.log('[AuthContext] Resposta do servidor:', response.status);
      console.log('[AuthContext] Headers da resposta:', response.headers);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.message || 'Nao foi possivel realizar login.');
      }
      
      const data = await response.json();
      const userData = data.user ?? data.data?.user;
      console.log('[AuthContext] Dados do usuário recebidos:', userData);
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      // Verificar cookies após login
      console.log('[AuthContext] Cookies após login:', document.cookie);

      return userData;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const status = axiosError.response?.status;
      const apiMessage = axiosError.response?.data?.message;

      // Tratamento específico para email não verificado
      if (status === 403 || (apiMessage && apiMessage.toLowerCase().includes('verificado'))) {
        throw new Error(apiMessage || 'Email nao verificado. Verifique seu email para ativar a conta.');
      }

      if (status === 401) {
        throw new Error(apiMessage || 'Email ou senha invalidos.');
      }

      throw new Error(apiMessage || 'Nao foi possivel realizar login.');
    }
  };

  const logout = async () => {
    try {
      await api.post('/user/logout');
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout realizado');
      router.push('/admin/login');
    } catch (error) {
      console.error('Erro logout', error);
      setUser(null);
      localStorage.removeItem('user');
      router.push('/admin/login');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
