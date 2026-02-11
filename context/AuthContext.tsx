'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import api from '@/service/api';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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
  // Alterado para aceitar email e senha e retornar os dados do usuário
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

  // Agora a função login realmente autentica no seu backend Node.js
  const login = async (email: string, password: string): Promise<User> => {
    try {
      // Faz a chamada ao seu backend na porta 8000
      const response = await api.post('/user/login', { email, password });
      
      const userData = response.data.user;

      if (!userData) throw new Error("Dados do usuário não recebidos.");

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return userData; // Retorna para o componente de login prosseguir
    } catch (error: any) {
      // Lança o erro para ser capturado pelo catch do formulário
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/user/logout');
      setUser(null);
      localStorage.removeItem('user');
      toast.success('Logout realizado');
      router.push('/admin/login'); // Ajustado para sua rota admin
    } catch (error) {
      console.error("Erro logout", error);
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
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  return context;
};