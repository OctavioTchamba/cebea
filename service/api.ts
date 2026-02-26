import axios, { AxiosError, AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { getApiBaseUrl } from '@/lib/api-base-url';

const baseURL = getApiBaseUrl();

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

type AuthRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
  _skipAuthRefresh?: boolean;
};

const PUBLIC_USER_ROUTES = [
  '/user/login',
  '/user/signup',
  '/user/verify-email',
  '/user/forgot-password',
  '/user/reset-password',
];

const PRIVATE_RESOURCE_PREFIXES = ['/publications', '/news', '/events', '/workshops'];
const PRIVATE_USER_PREFIXES = ['/user/me', '/user/logout'];
const REFRESH_ROUTE = '/user/refresh-token';
const AUTH_REFRESH_PROXY_ROUTE = '/api/auth/refresh';

const getTokenFromPayload = (payload: unknown): string | null => {
  if (!payload || typeof payload !== 'object') return null;

  const data = payload as Record<string, unknown>;
  const nested = (data.data && typeof data.data === 'object' ? data.data : null) as
    | Record<string, unknown>
    | null;

  const token =
    data.accessToken ??
    data.token ??
    data.access_token ??
    nested?.accessToken ??
    nested?.token ??
    nested?.access_token;

  return typeof token === 'string' && token.trim() ? token.trim() : null;
};

const getPathnameFromUrl = (url?: string): string => {
  if (!url) return '';

  try {
    const pathname = new URL(url, baseURL).pathname;
    return pathname.startsWith('/api/') ? pathname.slice(4) : pathname;
  } catch {
    const pathname = url.split('?')[0] ?? '';
    return pathname.startsWith('/api/') ? pathname.slice(4) : pathname;
  }
};

const isPrivateRoute = (config: InternalAxiosRequestConfig): boolean => {
  const pathname = getPathnameFromUrl(config.url);

  if (!pathname) return false;

  if (pathname.startsWith(REFRESH_ROUTE)) {
    return false;
  }

  if (PUBLIC_USER_ROUTES.some((route) => pathname.startsWith(route))) {
    return false;
  }

  if (PRIVATE_USER_PREFIXES.some((route) => pathname.startsWith(route))) {
    return true;
  }

  if (PRIVATE_RESOURCE_PREFIXES.some((route) => pathname.startsWith(route))) {
    return true;
  }

  return false;
};

const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  const storageToken =
    window.localStorage.getItem('accessToken') ?? window.localStorage.getItem('token');
  if (storageToken) return storageToken;

  const accessCookieToken = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith('accessToken='))
    ?.split('=')[1];

  if (accessCookieToken) return decodeURIComponent(accessCookieToken);

  const legacyCookieToken = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith('token='))
    ?.split('=')[1];

  return legacyCookieToken ? decodeURIComponent(legacyCookieToken) : null;
};

const storeAccessToken = (token: string): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem('accessToken', token);
  window.localStorage.setItem('token', token);
};

const clearAccessToken = (): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('token');
};

let refreshPromise: Promise<string | null> | null = null;

const refreshAccessToken = async (): Promise<string | null> => {
  if (typeof window === 'undefined') return null;

  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const response = await axios.post(
          AUTH_REFRESH_PROXY_ROUTE,
          {},
          {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
          }
        );

        const refreshedToken = getTokenFromPayload(response.data) ?? getAccessToken();

        if (refreshedToken) {
          storeAccessToken(refreshedToken);
          return refreshedToken;
        }

        clearAccessToken();
        return null;
      } catch {
        clearAccessToken();
        return null;
      } finally {
        refreshPromise = null;
      }
    })();
  }

  return refreshPromise;
};

api.interceptors.request.use((config) => {
  if (!isPrivateRoute(config)) {
    return config;
  }

  const authConfig = config as AuthRequestConfig;
  if (authConfig._skipAuthRefresh) {
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

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const originalConfig = error.config as AuthRequestConfig | undefined;

    if (
      !originalConfig ||
      status !== 401 ||
      originalConfig._retry ||
      originalConfig._skipAuthRefresh ||
      !isPrivateRoute(originalConfig)
    ) {
      return Promise.reject(error);
    }

    originalConfig._retry = true;

    const refreshedToken = await refreshAccessToken();
    if (!refreshedToken) {
      return Promise.reject(error);
    }

    const headers = AxiosHeaders.from(originalConfig.headers);
    headers.set('Authorization', `Bearer ${refreshedToken}`);
    originalConfig.headers = headers;

    return api(originalConfig);
  }
);

export default api;
