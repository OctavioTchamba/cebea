const DEFAULT_PROD_API_URL = 'https://cebea-railway-production.up.railway.app/api';
const DEFAULT_DEV_API_URL = 'http://localhost:8000/api';

const trimTrailingSlash = (url: string): string => url.replace(/\/+$/, '');

export const getApiBaseUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL;

  if (envUrl && envUrl.trim()) {
    return trimTrailingSlash(envUrl.trim());
  }

  if (process.env.NODE_ENV === 'production') {
    return DEFAULT_PROD_API_URL;
  }

  return DEFAULT_DEV_API_URL;
};
