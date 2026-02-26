// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch('https://cebea-railway-production.up.railway.app/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(data, { status: res.status });
  }

  // Extrai o token do cookie do backend
  const setCookie = res.headers.get('set-cookie');
  let accessToken = data?.accessToken ?? data?.token ?? data?.data?.accessToken ?? null;

  // Se o token não veio no body, tenta extrair do cookie
  if (!accessToken && setCookie) {
    const match = setCookie.match(/accessToken=([^;]+)/);
    if (match) accessToken = match[1];
  }

  const response = NextResponse.json(
    { ...data, accessToken }, // garante que o token vem no body
    { status: 200 }
  );

  if (setCookie) {
    response.headers.set('set-cookie', setCookie);
  }

  return response;
}