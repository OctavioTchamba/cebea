import { NextRequest, NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/lib/api-base-url';

const API_URL = getApiBaseUrl();

function getCookieValue(setCookieHeader: string | null, name: string): string | null {
  if (!setCookieHeader) return null;
  const match = setCookieHeader.match(new RegExp(`${name}=([^;]+)`));
  if (!match || !match[1]) return null;

  try {
    return decodeURIComponent(match[1].trim());
  } catch {
    return match[1].trim();
  }
}

function buildCookieHeader(request: NextRequest): string {
  const cookies: string[] = [];

  const accessToken = request.cookies.get('accessToken')?.value;
  const legacyAccessToken = request.cookies.get('token')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const legacyRefreshToken = request.cookies.get('refresh_token')?.value;

  if (accessToken) {
    cookies.push(`accessToken=${encodeURIComponent(accessToken)}`);
  }

  if (legacyAccessToken) {
    cookies.push(`token=${encodeURIComponent(legacyAccessToken)}`);
  }

  if (refreshToken) {
    cookies.push(`refreshToken=${encodeURIComponent(refreshToken)}`);
  }

  if (legacyRefreshToken) {
    cookies.push(`refresh_token=${encodeURIComponent(legacyRefreshToken)}`);
  }

  return cookies.join('; ');
}

export async function POST(request: NextRequest) {
  try {
    const cookieHeader = buildCookieHeader(request);

    const res = await fetch(`${API_URL}/user/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      },
      body: JSON.stringify({}),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { message: data?.message || 'Nao foi possivel atualizar a sessao.' },
        { status: res.status }
      );
    }

    const setCookie = res.headers.get('set-cookie');
    const accessToken =
      getCookieValue(setCookie, 'accessToken') ??
      getCookieValue(setCookie, 'access_token') ??
      getCookieValue(setCookie, 'token') ??
      data?.accessToken ??
      data?.access_token ??
      data?.token ??
      data?.data?.accessToken ??
      data?.data?.access_token ??
      data?.data?.token;

    const refreshToken =
      getCookieValue(setCookie, 'refreshToken') ??
      getCookieValue(setCookie, 'refresh_token') ??
      data?.refreshToken ??
      data?.refresh_token ??
      data?.data?.refreshToken ??
      data?.data?.refresh_token;

    const responseBody =
      accessToken && data && typeof data === 'object'
        ? {
            ...data,
            accessToken: data?.accessToken ?? data?.access_token ?? data?.token ?? accessToken,
          }
        : data;

    const response = NextResponse.json(responseBody, { status: 200 });

    if (accessToken) {
      response.cookies.set('accessToken', accessToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    if (refreshToken) {
      response.cookies.set('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    return response;
  } catch (e) {
    console.error('[api/auth/refresh]', e);
    return NextResponse.json(
      { message: 'Erro ao comunicar com o servidor.' },
      { status: 500 }
    );
  }
}
