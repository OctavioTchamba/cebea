'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, FileText, Newspaper, Calendar, LayoutDashboard, Menu, X, Users, ChevronLeft, ChevronRight, Settings, Bell } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Protecao de Rota
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#129DE4] mx-auto"></div>
          <p className="text-gray-600 font-medium">Carregando...</p>
        </div>
      </div>
    );
  }
  
  if (!user) return null;

  const menuItems = [
    { href: '/admin/dashboard', label: 'Visão Geral', icon: LayoutDashboard },
    { href: '/admin/dashboard/posts', label: 'Publicações', icon: FileText },
    { href: '/admin/dashboard/news', label: 'Notícias', icon: Newspaper },
    { href: '/admin/dashboard/events', label: 'Eventos', icon: Calendar },
    { href: '/admin/dashboard/workshops', label: 'Workshops', icon: Users },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      
      {/* Sidebar Desktop */}
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} bg-gradient-to-b from-[#002059] to-[#003580] text-white transition-all duration-300 flex-col hidden lg:flex shadow-2xl relative z-10`}>
        
        {/* Logo Section */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center w-full'}`}>
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            {isSidebarOpen && (
              <div>
                <h1 className="font-bold text-xl text-white">ISCED Huila</h1>
                <p className="text-xs text-blue-200">Painel Admin</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = isActiveRoute(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200
                  ${isActive 
                    ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm border border-white/20' 
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
                  }
                  ${!isSidebarOpen && 'justify-center'}
                  group relative
                `}
              >
                <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-blue-200 group-hover:text-white'}`} />
                {isSidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
                {isActive && isSidebarOpen && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-[#129DE4] animate-pulse" />
                )}
                
                {/* Tooltip for collapsed state */}
                {!isSidebarOpen && (
                  <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl">
                    {item.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900" />
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        {isSidebarOpen && (
          <div className="p-4 border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs text-blue-200 truncate">{user.email}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-24 bg-white text-[#002059] rounded-full p-1.5 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        >
          {isSidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <aside className="w-72 h-full bg-gradient-to-b from-[#002059] to-[#003580] text-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                  <LayoutDashboard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-xl text-white">ISCED Huila</h1>
                  <p className="text-xs text-blue-200">Painel Admin</p>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:bg-white/10 p-2 rounded-lg">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="py-6 px-3 space-y-2">
              {menuItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-white/15 text-white shadow-lg backdrop-blur-sm' 
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="h-20 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between px-6 lg:px-8 z-10">
          
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="lg:hidden text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                Bem-vindo de volta, {user.name?.split(' ')[0]}!
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date().toLocaleDateString('pt-PT', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Notifications  <button className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            </button>
*/}
           
            {/* Settings<Link href="/admin/dashboard/settings">
              <button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </Link> */}
            

            {/* Divider */}
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

            {/* User Profile Desktop */}
            <Link href="/admin/dashboard/profile" className="hidden sm:flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </Link>

            {/* User Profile Mobile */}
            <Link href="/admin/dashboard/profile" className="sm:hidden">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            </Link>
            
            {/* Logout Button */}
            <button 
              onClick={logout}
              className="flex items-center gap-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 px-3 py-2 rounded-lg transition-colors font-medium"
              title="Terminar sessao"
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden lg:inline">Sair</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
