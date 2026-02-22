import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://cebea-railway-production.up.railway.app/api';

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
  return response;
}
