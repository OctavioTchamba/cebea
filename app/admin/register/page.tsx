'use client';

import { useForm } from 'react-hook-form';
import api from '@/service/api';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { useState } from 'react';

type SignupFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormData>();
  const router = useRouter();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const onSubmit = async (data: SignupFormData) => {
    try {
      await api.post('/signup', data);
      toast.success('Conta criada com sucesso! Verifique seu email.', {
        duration: 4000,
        icon: '✅',
      });
      router.push('/admin/login');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Erro ao cadastrar. Tente novamente.', {
        duration: 4000,
        icon: '❌',
      });
    }
  };

  const benefits = [
    'Acesso completo à plataforma',
    'Gestão de publicações e projetos',
    'Painel administrativo avançado',
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
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl font-bold text-[#002059]">Criar Conta</h2>
                <p className="mt-2 text-sm text-gray-600">
                  Junte-se ao CEBEA e comece a gerenciar seus projetos
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#002059] mb-1">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className={`h-5 w-5 transition-colors ${focusedField === 'name' ? 'text-[#14E259]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      {...register('name', { 
                        required: 'Nome é obrigatório',
                        minLength: { value: 3, message: 'Nome deve ter no mínimo 3 caracteres' }
                      })}
                      type="text"
                      id="name"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`block w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : focusedField === 'name'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="João Silva"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

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
                      {...register('email', { 
                        required: 'Email é obrigatório',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                      type="email"
                      id="email"
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`block w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : focusedField === 'email'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="joao@exemplo.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#002059] mb-1">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className={`h-5 w-5 transition-colors ${focusedField === 'phone' ? 'text-[#14E259]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      {...register('phone', { 
                        required: 'Telefone é obrigatório',
                        minLength: { value: 9, message: 'Telefone deve ter no mínimo 9 dígitos' }
                      })}
                      type="tel"
                      id="phone"
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`block w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500' 
                          : focusedField === 'phone'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+244 900 000 000"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Senha */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#002059] mb-1">
                    Senha
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className={`h-5 w-5 transition-colors ${focusedField === 'password' ? 'text-[#14E259]' : 'text-gray-400'}`} />
                    </div>
                    <input
                      {...register('password', { 
                        required: 'Senha é obrigatória',
                        minLength: { value: 6, message: 'Senha deve ter no mínimo 6 caracteres' }
                      })}
                      type="password"
                      id="password"
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                      className={`block w-full pl-10 pr-3 py-2.5 border-2 rounded-lg focus:outline-none transition-all text-sm ${
                        errors.password 
                          ? 'border-red-500 focus:border-red-500' 
                          : focusedField === 'password'
                          ? 'border-[#14E259] bg-[#14E259]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-[#129DE4] to-[#14E259] hover:from-[#0d8bc7] hover:to-[#12c950] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#14E259] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#14E259]/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Criando conta...
                    </>
                  ) : (
                    <>
                      Criar Conta
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                {/* Login Link */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-600">
                    Já possui uma conta?{' '}
                    <Link 
                      href="/admin/login" 
                      className="font-medium text-[#129DE4] hover:text-[#0d8bc7] transition-colors"
                    >
                      Fazer Login
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
                  Bem-vindo ao CEBEA
                </h2>
                <p className="text-lg text-white/80 mb-10">
                  Centro de Estudos da Biodiversidade e Educação Ambiental
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
                  <p className="text-sm text-white/80 italic">
                    "Junte-se a nós na construção de um futuro mais sustentável através da pesquisa e inovação."
                  </p>
                  <p className="text-sm text-white font-medium mt-2">
                    — Equipe CEBEA
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}