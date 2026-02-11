'use client';
import { useAuth } from "@/context/AuthContext";
import { User, Mail, Shield, LogOut, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-[#002059]">Perfil do Administrador</h1>
      
      <div className="bg-white rounded-xl shadow-sm border p-8 space-y-6">
        <div className="flex items-center gap-4 border-b pb-6">
          <div className="h-16 w-16 bg-[#E6F4FF] rounded-full flex items-center justify-center text-[#0D7AB8] text-2xl font-bold">
            {user?.name?.charAt(0) || 'A'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.role}</p>
            <p className="text-sm text-gray-500">{user?.createdAt}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Mail className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
              <p className="text-gray-900">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <User className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Nome</p>
              <p className="text-gray-900">{user?.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Phone className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Telefone</p>
              <p className="text-gray-900">{user?.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Shield className="text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">ID do Usuário</p>
              <p className="text-gray-900 font-mono text-sm">{user?.id}</p>
            </div>
          </div>
        </div>


        <div className="pt-4 border-t">
          <Button 
            variant="destructive" 
            className="w-full flex items-center gap-2 justify-center"
            onClick={logout}
          >
            <LogOut size={18} /> Encerrar Sessão
          </Button>
        </div>
      </div>
    </div>
  );
}