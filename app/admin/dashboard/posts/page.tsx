// src/app/admin/dashboard/posts/page.tsx
'use client';
import { useState, useEffect } from "react";
import api from "@/service/api";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Search, BookOpen, Calendar, Users } from "lucide-react";
import PublicationModal from "@/components/modals/PostModal";
import { Input } from "@/components/ui/input";
import { toast } from "react-hot-toast";

export default function PublicationsPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const res = await api.get('/publications');
      setData(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao carregar publicações");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const openCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
  const openEdit = (item: any) => { setSelectedItem(item); setIsModalOpen(true); };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem a certeza que deseja eliminar esta publicação?")) return;
    try {
      await api.delete(`/publications/${id}`);
      toast.success("Publicação eliminada com sucesso");
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao eliminar publicação");
    }
  };

  const filteredData = data.filter((item: any) => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.authors?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Gerir Publicações
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {data.length} {data.length === 1 ? 'publicação' : 'publicações'} registadas
              </p>
            </div>
            <Button 
              onClick={openCreate} 
              className="bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="mr-2 h-5 w-5" /> 
              Nova Publicação
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Pesquisar por título ou autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
            />
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-4">
          {isLoading ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#129DE4] mx-auto mb-4"></div>
              <p className="text-gray-500 dark:text-gray-400">Carregando publicações...</p>
            </div>
          ) : filteredData.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Nenhuma publicação encontrada
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {searchTerm ? 'Tente pesquisar com outros termos' : 'Comece adicionando uma nova publicação'}
              </p>
            </div>
          ) : (
            filteredData.map((item: any) => (
              <div 
                key={item.id} 
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-[#129DE4] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    {/* Title and Badge */}
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#0D7AB8] transition-colors">
                          {item.title}
                        </h3>
                        {item.type && (
                          <span className="inline-block mt-2 px-3 py-1 bg-[#E6F4FF] dark:bg-[#0D7AB8]/20 text-[#0D7AB8] dark:text-[#8DD1FF] text-xs font-medium rounded-full">
                            {item.type}
                          </span>
                        )}
                      </div>
                      {item.published && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E6F4FF] text-[#0D7AB8] dark:bg-[#0D7AB8]/20 dark:text-[#8DD1FF]">
                          Publicado
                        </span>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {item.authors && (
                        <div className="flex items-center gap-1.5">
                          <Users className="h-4 w-4" />
                          <span>{item.authors}</span>
                        </div>
                      )}
                      {item.year && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{item.year}</span>
                        </div>
                      )}
                      {item.theme && (
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="h-4 w-4" />
                          <span>{item.theme}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex sm:flex-col gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => openEdit(item)}
                      className="flex-1 sm:flex-none hover:bg-[#E6F4FF] hover:text-[#0D7AB8] hover:border-[#0D7AB8] dark:hover:bg-[#0D7AB8]/20 transition-colors"
                    >
                      <Pencil className="h-4 w-4 sm:mr-0 mr-2" />
                      <span className="sm:hidden">Editar</span>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 sm:flex-none hover:bg-red-50 hover:text-red-600 hover:border-red-600 dark:hover:bg-red-950/30 transition-colors"
                    >
                      <Trash2 className="h-4 w-4 sm:mr-0 mr-2" />
                      <span className="sm:hidden">Eliminar</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <PublicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchData}
        initialData={selectedItem}
      />
    </div>
  );
}
