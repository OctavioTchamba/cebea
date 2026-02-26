import { NextResponse } from 'next/server';
import { getApiBaseUrl } from '@/lib/api-base-url';

const API_URL = getApiBaseUrl();

export async function POST() {
  try {
    await fetch(`${API_URL}/user/logout`, { method: 'POST' });
  } catch (e) {
    console.error('[api/auth/logout]', e);
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set('accessToken', '', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
  });
  response.cookies.set('refreshToken', '', {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
  });
  return response;
}
