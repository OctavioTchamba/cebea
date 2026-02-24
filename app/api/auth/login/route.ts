import { NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/lib/api-base-url';

const API_URL = getApiBaseUrl();

function getCookieValue(setCookieHeader: string | null, name: string): string | null {
  if (!setCookieHeader) return null;
  const match = setCookieHeader.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1].trim() : null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { message: data?.message || 'Erro ao fazer login.' },
        { status: res.status }
      );
    }

    const setCookie = res.headers.get('set-cookie');
    const token =
      getCookieValue(setCookie, 'accessToken') ??
      getCookieValue(setCookie, 'token') ??
      data?.accessToken ??
      data?.token;

    const responseBody =
      token && data && typeof data === 'object'
        ? {
            ...data,
            accessToken: data?.accessToken ?? data?.token ?? token,
          }
        : data;

    const response = NextResponse.json(responseBody, { status: 200 });

    if (token) {
      response.cookies.set('accessToken', token, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 7 dias
      });
    }

    return response;
  } catch (e) {
    console.error('[api/auth/login]', e);
    return NextResponse.json(
      { message: 'Erro ao comunicar com o servidor.' },
      { status: 500 }
    );
  }
}
