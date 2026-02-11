"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Shield, CheckCircle, LogIn } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/admin/dashboard");
    } catch (err: any) {
      const message = err.response?.data?.message || "Erro ao fazer login.";
      setError(message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    'Gestão completa de publicações',
    'Controle de projetos de pesquisa',
    'Dashboard com estatísticas',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="flex-1 px-8 py-10 lg:px-12 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto"
            >
              {/* Logo/Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#129DE4] to-[#14E259] rounded-2xl mb-4"
                >
                  <LogIn className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#002059]">Área Administrativa</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Faça login para acessar o painel de controle
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#002059] mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={`h-5 w-5 transition-colors ${focusedField === 'email' ? 'text-[#14E259]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`block w-full pl-10 pr-3 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        focusedField === 'email'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-[#002059]">
                      Senha
                    </label>
                    <Link 
                      href="/admin/forgot-password" 
                      className="text-xs text-[#129DE4] hover:text-[#0d8bc7] transition-colors"
                    >
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className={`h-5 w-5 transition-colors ${focusedField === 'password' ? 'text-[#14E259]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`block w-full pl-10 pr-3 py-3 border-2 rounded-lg focus:outline-none transition-all ${
                        focusedField === 'password'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#14E259] focus:ring-[#14E259] border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Lembrar de mim
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  type="submit"
                  className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[#129DE4] to-[#14E259] hover:from-[#0d8bc7] hover:to-[#12c950] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14E259] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#14E259]/20"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      Entrar
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Signup Link */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600">
                    Não possui uma conta?{' '}
                    <Link 
                      href="/admin/signup" 
                      className="font-medium text-[#129DE4] hover:text-[#0d8bc7] transition-colors"
                    >
                      Criar conta
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex flex-1 bg-gradient-to-br from-[#002059] via-[#003580] to-[#129DE4] relative overflow-hidden"
          >
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center px-10 py-12 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-3">
                  Bem-vindo de Volta
                </h2>
                <p className="text-lg text-white/80 mb-10">
                  Gerencie toda a plataforma CEBEA em um só lugar
                </p>

                <div className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-[#14E259] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-base font-medium">{benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-12 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#14E259] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium mb-1">Login Seguro</p>
                      <p className="text-xs text-white/70">
                        Seus dados estão protegidos com criptografia de ponta a ponta
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}