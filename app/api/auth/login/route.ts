import { NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/lib/api-base-url';

const API_URL = getApiBaseUrl();

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

    // O backend já retorna o accessToken no body — usa directamente
    const accessToken = data?.accessToken ?? null;
    const refreshToken = data?.refreshToken ?? null;

    // Garante que o token vem no body para o AuthContext guardar no localStorage
    const response = NextResponse.json(
      { ...data, accessToken },
      { status: 200 }
    );

    // Cookie para o middleware (pode ser httpOnly)
    if (accessToken) {
      response.cookies.set('accessToken', accessToken, {
        path: '/',
        httpOnly: false, // false para o JS conseguir ler se necessário
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 30, // 30 minutos
      });
    }

    if (refreshToken) {
      response.cookies.set('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
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