import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

const getBaseURL = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  if (process.env.NODE_ENV === 'production') {
    return 'https://cebea-railway-production.up.railway.app/api';
  }

  return 'http://localhost:8000/api';
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const PUBLIC_USER_ROUTES = [
  '/user/login',
  '/user/signup',
  '/user/verify-email',
  '/user/forgot-password',
  '/user/reset-password',
];

const PRIVATE_RESOURCE_PREFIXES = ['/publications', '/news', '/events', '/workshops'];
const PRIVATE_USER_PREFIXES = ['/user/me', '/user/logout', '/user/refresh-token'];

const MUTATING_METHODS = new Set(['post', 'put', 'patch', 'delete']);

const getPathnameFromUrl = (url?: string): string => {
  if (!url) return '';

  try {
    const pathname = new URL(url, getBaseURL()).pathname;
    return pathname.startsWith('/api/') ? pathname.slice(4) : pathname;
  } catch {
    const pathname = url.split('?')[0] ?? '';
    return pathname.startsWith('/api/') ? pathname.slice(4) : pathname;
  }
};

const isPrivateRoute = (config: InternalAxiosRequestConfig): boolean => {
  const method = (config.method ?? 'get').toLowerCase();
  const pathname = getPathnameFromUrl(config.url);

  if (!pathname) return false;

  if (PUBLIC_USER_ROUTES.some((route) => pathname.startsWith(route))) {
    return false;
  }

  if (PRIVATE_USER_PREFIXES.some((route) => pathname.startsWith(route))) {
    return true;
  }

  if (PRIVATE_RESOURCE_PREFIXES.some((route) => pathname.startsWith(route)) && MUTATING_METHODS.has(method)) {
    return true;
  }

  return false;
};

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
  if (!isPrivateRoute(config)) {
    return config;
  }

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
