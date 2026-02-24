import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { getApiBaseUrl } from '@/lib/api-base-url';

const baseURL = getApiBaseUrl();

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  const storageToken = window.localStorage.getItem('accessToken') ?? window.localStorage.getItem('token');
  if (storageToken) return storageToken;

  const cookieToken = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith('accessToken='))
    ?.split('=')[1];

  return cookieToken || null;
};

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (!token) {
    return config;
  }

  const headers = AxiosHeaders.from(config.headers);
  headers.set('Authorization', `Bearer ${token}`);
  config.headers = headers;

  return config;
});

export default api;
