'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '@/service/api';
import { CheckCircle, XCircle, Loader } from 'lucide-react';
import Link from 'next/link';

// Componente interno para usar o hook useSearchParams
function VerifyContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (token) {
      api.get(`/user/verify-email?token=${token}`)
        .then(() => setStatus('success'))
        .catch((error: any) => {
          console.error('Erro na verificação:', error);
          const message = error.response?.data?.message || 'Token inválido ou expirado.';
          setErrorMessage(message);
          setStatus('error');
        });
    } else {
      setErrorMessage('Token não fornecido na URL.');
      setStatus('error');
    }
  }, [token]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
      {status === 'loading' && (
        <div className="flex flex-col items-center">
          <Loader className="w-16 h-16 text-blue-500 animate-spin mb-4" />
          <h2 className="text-xl font-bold">Validando token...</h2>
        </div>
      )}
      {status === 'success' && (
        <div className="flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Conta Ativada!</h2>
          <p className="text-gray-600 mb-4">Seu email foi verificado com sucesso.</p>
          <Link href="/admin/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ir para Login
          </Link>
        </div>
      )}
      {status === 'error' && (
        <div className="flex flex-col items-center">
          <XCircle className="w-16 h-16 text-red-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Erro na Verificação</h2>
          <p className="text-gray-600 mb-4 text-center">{errorMessage || 'Token inválido ou expirado.'}</p>
          <div className="flex flex-col gap-2 w-full">
            <Link href="/admin/login" className="text-blue-600 hover:underline text-center">
              Voltar para Login
            </Link>
            <Link href="/admin/register" className="text-blue-600 hover:underline text-center text-sm">
              Criar nova conta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// Página principal com Suspense (obrigatório para useSearchParams no build)
export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Suspense fallback={<div>Carregando...</div>}>
        <VerifyContent />
      </Suspense>
    </div>
  );
}