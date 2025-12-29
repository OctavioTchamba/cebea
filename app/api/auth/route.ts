import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;

    // Hardcoded credentials for simplicity
    if (username === 'admin' && password === 'admin') {
        const cookieStore = await cookies();
        cookieStore.set('auth_token', 'valid_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    return NextResponse.json({ success: true });
}
