"use client";

import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ProtectedRoute from "@/components/ProtectedRoute";
import { LogOut, Shield, Users, FileText, Settings } from "lucide-react";

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  
  
  
  const handleLogout = async () => {
    try {
      await logout();
      await fetch("/api/auth/logout", {method: "POST"})
      router.push("/admin/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Painel Administrativo
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Bem-vindo, {user?.email}
                </p>
              </div>
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total de Usuários
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    0
                  </p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Publicações
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    0
                  </p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Notícias
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    0
                  </p>
                </div>
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Configurações
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    -
                  </p>
                </div>
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Ações Rápidas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="h-auto py-4 flex flex-col items-center"
                onClick={() => router.push("/admin/publicacoes")}
              >
                <FileText className="h-6 w-6 mb-2" />
                <span>Gerenciar Publicações</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span>Gerenciar Notícias</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
                <Users className="h-6 w-6 mb-2" />
                <span>Gerenciar Usuários</span>
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-green-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
                  Área Protegida
                </h3>
                <p className="text-green-800 dark:text-green-400">
                  Esta é uma área restrita apenas para administradores. 
                  Certifique-se de fazer logout quando terminar sua sessão.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}

