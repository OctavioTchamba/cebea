import axios from 'axios';

const getBaseURL = () => {
  // Produção
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_URL || 'https://cebea-server-production.up.railway.app/api';
  }
  
  // Desenvolvimento
  return 'http://localhost:8080/api';  // ou a porta que seu servidor usa
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;