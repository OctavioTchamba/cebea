'use client';

import { useEffect, useState } from 'react';
import api from '@/service/api';
import { 
  FileText, 
  Newspaper, 
  Calendar, 
  Users, 
  ArrowRight,
  Plus,
  TrendingUp
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function DashboardHome() {
  const [stats, setStats] = useState({
    publications: 0,
    news: 0,
    events: 0,
    workshops: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [pub, news, ev, work] = await Promise.all([
          api.get('/publications'),
          api.get('/news'),
          api.get('/events'),
          api.get('/workshops')
        ]);
        
        setStats({
          publications: pub.data.length,
          news: news.data.length,
          events: ev.data.length,
          workshops: work.data.length
        });
      } catch (error) {
        console.error("Erro ao carregar estatísticas", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { title: "Publicações", value: stats.publications, icon: FileText, link: "/admin/dashboard/posts" },
    { title: "Notícias", value: stats.news, icon: Newspaper, link: "/admin/dashboard/news" },
    { title: "Eventos", value: stats.events, icon: Calendar, link: "/admin/dashboard/events" },
    { title: "Workshops", value: stats.workshops, icon: Users, link: "/admin/dashboard/workshops" },
    
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900">Visão Geral</h1>
        <p className="text-sm text-gray-500">Bem-vindo ao painel administrativo do CEBEA.</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.title} className="border border-gray-200 hover:border-[#129DE4] transition-all duration-200 group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-gray-600">{card.title}</CardTitle>
              <card.icon className="h-4 w-4 text-gray-400 group-hover:text-[#129DE4] transition-colors" />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-semibold tracking-tight text-gray-900">{card.value}</div>
              <Link 
                href={card.link} 
                className="inline-flex items-center text-xs font-medium text-[#0D7AB8] hover:text-[#002059] transition-colors group/link"
              >
                Gerenciar 
                <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Ações Rápidas */}
      <Card className="border border-gray-200">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold text-gray-900">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link 
              href="/admin/dashboard/news" 
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#E6F4FF] hover:border-[#129DE4] transition-all duration-200 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white group-hover:border-[#129DE4] transition-colors">
                <Plus className="h-4 w-4 text-[#0D7AB8]" />
              </div>
              <span className="text-sm font-medium text-gray-700">Nova Notícia</span>
            </Link>
            
            <Link 
              href="/admin/dashboard/posts" 
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#E6F4FF] hover:border-[#129DE4] transition-all duration-200 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white group-hover:border-[#129DE4] transition-colors">
                <Plus className="h-4 w-4 text-[#0D7AB8]" />
              </div>
              <span className="text-sm font-medium text-gray-700">Nova Publicação</span>
            </Link>

            <Link 
              href="/admin/dashboard/events" 
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#E6F4FF] hover:border-[#129DE4] transition-all duration-200 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white group-hover:border-[#129DE4] transition-colors">
                <Plus className="h-4 w-4 text-[#0D7AB8]" />
              </div>
              <span className="text-sm font-medium text-gray-700">Novo Evento</span>
            </Link>

            <Link 
              href="/admin/dashboard/workshops" 
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#E6F4FF] hover:border-[#129DE4] transition-all duration-200 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white group-hover:border-[#129DE4] transition-colors">
                <Plus className="h-4 w-4 text-[#0D7AB8]" />
              </div>
              <span className="text-sm font-medium text-gray-700">Novo Workshop</span>
            </Link>
            <Link 
              href="/admin/register" 
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:bg-[#E6F4FF] hover:border-[#129DE4] transition-all duration-200 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white group-hover:border-[#129DE4] transition-colors">
                <Plus className="h-4 w-4 text-[#0D7AB8]" />
              </div>
              <span className="text-sm font-medium text-gray-700">Novo Usuário</span>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Informação do Sistema */}
      <Card className="border border-gray-200 bg-gray-50/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#0D7AB8]" />
            <CardTitle className="text-base font-semibold text-gray-900">Informação</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 leading-relaxed">
            As mensagens enviadas pelo formulário de contactos no site são encaminhadas diretamente para o email institucional configurado.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}