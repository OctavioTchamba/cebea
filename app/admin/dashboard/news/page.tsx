// src/app/admin/dashboard/news/page.tsx
'use client';
import { useState, useEffect } from "react";
import api from "@/service/api";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Newspaper, Search, Calendar, Eye, EyeOff, Filter } from "lucide-react";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import NewsModal from "@/components/modals/NewsModal";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');

  const fetchData = async () => {
    try {
      const res = await api.get('/news');
      setNews(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar notícias");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Tem a certeza que deseja eliminar esta notícia?")) return;
    try {
      await api.delete(`/news/${id}`);
      toast.success("Notícia eliminada com sucesso");
      fetchData();
    } catch (error) {
      toast.error("Erro ao eliminar notícia");
    }
  };

  const openCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
  const openEdit = (item: any) => { setSelectedItem(item); setIsModalOpen(true); };

  const filteredNews = news.filter((item: any) => {
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' ? true :
                         filterStatus === 'published' ? item.published :
                         !item.published;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#002059] to-[#003580] p-3 rounded-xl shadow-lg">
                  <Newspaper className="h-7 w-7 text-white" />
                </div>
                Gestão de Notícias
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {news.length} {news.length === 1 ? 'notícia registada' : 'notícias registadas'}
              </p>
            </div>
            <Button 
              onClick={openCreate} 
              className="bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="mr-2 h-5 w-5" />
              Nova Notícia
            </Button>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquisar por título ou categoria..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filterStatus === 'all'
                    ? 'bg-[#002059] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setFilterStatus('published')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  filterStatus === 'published'
                    ? 'bg-[#129DE4] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Eye className="h-4 w-4" />
                Publicadas
              </button>
              <button
                onClick={() => setFilterStatus('draft')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  filterStatus === 'draft'
                    ? 'bg-gray-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <EyeOff className="h-4 w-4" />
                Rascunhos
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#129DE4] mx-auto mb-4"></div>
              <p className="text-gray-500 dark:text-gray-400">Carregando notícias...</p>
            </div>
          ) : filteredNews.length === 0 ? (
            <div className="p-12 text-center">
              <Newspaper className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nenhuma notícia encontrada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {searchTerm ? 'Tente pesquisar com outros termos' : 'Comece adicionando uma nova notícia'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Título
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Data
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredNews.map((item: any) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#E6F4FF] to-[#CDE9FF] dark:from-[#0D7AB8]/20 dark:to-[#0D7AB8]/30 flex items-center justify-center">
                              <Newspaper className="h-5 w-5 text-[#129DE4] dark:text-[#8DD1FF]" />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                              {item.title}
                            </p>
                            {item.summary && (
                              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                                {item.summary}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {item.category && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#E6F4FF] dark:bg-[#0D7AB8]/20 text-[#0D7AB8] dark:text-[#8DD1FF]">
                            {item.category}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4" />
                          {new Date(item.createdAt).toLocaleDateString('pt-PT', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          item.published 
                            ? 'bg-[#E6F4FF] dark:bg-[#0D7AB8]/20 text-[#0D7AB8] dark:text-[#8DD1FF]' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}>
                          {item.published ? (
                            <>
                              <Eye className="h-3 w-3" />
                              Publicado
                            </>
                          ) : (
                            <>
                              <EyeOff className="h-3 w-3" />
                              Rascunho
                            </>
                          )}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => openEdit(item)}
                            className="hover:bg-[#E6F4FF] hover:text-[#0D7AB8] hover:border-[#0D7AB8] dark:hover:bg-[#0D7AB8]/20 transition-colors"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleDelete(item.id)}
                            className="hover:bg-red-50 hover:text-red-600 hover:border-red-600 dark:hover:bg-red-950/30 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Stats Footer */}
        {!isLoading && filteredNews.length > 0 && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#129DE4]" />
                <span className="text-gray-600 dark:text-gray-400">
                  Publicadas: <strong className="text-gray-900 dark:text-white">
                    {news.filter((n: any) => n.published).length}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  Rascunhos: <strong className="text-gray-900 dark:text-white">
                    {news.filter((n: any) => !n.published).length}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <NewsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchData}
        initialData={selectedItem}
      />
    </div>
  );
}