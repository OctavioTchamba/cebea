"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Status = "loading" | "success" | "error" | "expired";

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Token de verificação não encontrado na URL.");
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(
          `http://localhost:8000/api/user/verify-email?token=${token}`,
          { method: "GET" }
        );

        const data = await res.json();

        if (res.ok) {
          setStatus("success");
          setMessage(data.message);
        } else if (res.status === 400) {
          setStatus("expired");
          setMessage(data.message);
        } else {
          setStatus("error");
          setMessage(data.message || "Erro ao verificar email.");
        }
      } catch {
        setStatus("error");
        setMessage("Falha ao conectar com o servidor.");
      }
    };

    verify();
  }, [token]);

  // Auto-redirect após 5s no caso de sucesso
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => router.push("/login"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
          {/* Barra de cor no topo — muda com o status */}
          <div
            className={`h-1.5 w-full transition-all duration-700 ${
              status === "loading"
                ? "bg-blue-500 animate-pulse"
                : status === "success"
                ? "bg-emerald-500"
                : status === "expired"
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
          />

          <div className="p-10 flex flex-col items-center text-center">
            {/* Ícone */}
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                status === "loading"
                  ? "bg-blue-500/10"
                  : status === "success"
                  ? "bg-emerald-500/10"
                  : status === "expired"
                  ? "bg-amber-500/10"
                  : "bg-red-500/10"
              }`}
            >
              {status === "loading" && <LoadingIcon />}
              {status === "success" && <SuccessIcon />}
              {status === "expired" && <ExpiredIcon />}
              {status === "error" && <ErrorIcon />}
            </div>

            {/* Título */}
            <h1
              className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                status === "success"
                  ? "text-emerald-400"
                  : status === "expired"
                  ? "text-amber-400"
                  : status === "error"
                  ? "text-red-400"
                  : "text-slate-100"
              }`}
            >
              {status === "loading" && "Verificando..."}
              {status === "success" && "Email Verificado!"}
              {status === "expired" && "Link Expirado"}
              {status === "error" && "Erro na Verificação"}
            </h1>

            {/* Mensagem do backend */}
            <p className="text-slate-400 text-sm leading-relaxed">{message}</p>

            {/* Botões de ação */}
            <div className="mt-8 w-full flex flex-col gap-3">
              {status === "success" && (
                <>
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
                  >
                    Ir para o Login
                  </button>
                  <p className="text-slate-500 text-xs">
                    Redirecionando automaticamente em 5 segundos...
                  </p>
                </>
              )}

              {status === "expired" && (
                <button
                  onClick={() => router.push("/resend-verification")}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
                >
                  Reenviar Email de Verificação
                </button>
              )}

              {status === "error" && (
                <button
                  onClick={() => router.push("/admin/login")}
                  className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
                >
                  Voltar ao Cadastro
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Logo / branding embaixo */}
        <p className="text-center text-slate-600 text-xs mt-6">
          © {new Date().getFullYear()} CEBEA
        </p>
      </div>
    </div>
  );
}

// ─── Ícones inline ────────────────────────────────────────────

function LoadingIcon() {
  return (
    <svg
      className="w-9 h-9 text-blue-400 animate-spin"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg
      className="w-10 h-10 text-emerald-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function ExpiredIcon() {
  return (
    <svg
      className="w-10 h-10 text-amber-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg
      className="w-10 h-10 text-red-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M15 9l-6 6M9 9l6 6" />
    </svg>
  );
}