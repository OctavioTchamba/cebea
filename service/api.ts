import axios from 'axios';

const getBaseURL = () => {
  // Se estivermos no servidor (SSR), usamos localhost ou variável de ambiente
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_API_URL || 'https://cebea-server-production.up.railway.app/api';
  }

  const hostname = 'https://cebea-server-production.up.railway.app/api';
  
  // Se for produção (domínio real), usa a variável de ambiente
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // Se for desenvolvimento, detecta o IP dinamicamente para testes em telemóvel
  return `https://${hostname}`;
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true, // Essencial para cookies HttpOnly
});

export default api;



/*
// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/user', 
  withCredentials: true, // Essencial para enviar/receber Cookies HttpOnly
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;*/