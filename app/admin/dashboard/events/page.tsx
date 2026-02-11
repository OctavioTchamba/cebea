// src/app/admin/dashboard/events/page.tsx
'use client';
import { useState, useEffect } from "react";
import api from "@/service/api";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Calendar, MapPin, Clock, Search, Filter, CalendarCheck, CalendarX } from "lucide-react";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";
import EventModal from "@/components/modals/EventModal";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<'all' | 'upcoming' | 'past'>('all');

  const fetchData = async () => {
    try {
      const res = await api.get('/events');
      setEvents(res.data);
    } catch (error) {
      toast.error("Erro ao carregar eventos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Deseja cancelar e remover este evento?")) return;
    try {
      await api.delete(`/events/${id}`);
      toast.success("Evento removido com sucesso");
      fetchData();
    } catch (error) {
      toast.error("Erro ao remover evento");
    }
  };

  const openCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
  const openEdit = (item: any) => { setSelectedItem(item); setIsModalOpen(true); };

  const formatDateTime = (dateString: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('pt-PT', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDateOnly = (dateString: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('pt-PT', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric'
    });
  };

  const formatTimeOnly = (dateString: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleTimeString('pt-PT', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  const isUpcoming = (dateString: string) => {
    return new Date(dateString) > new Date();
  };

  const filteredEvents = events.filter((item: any) => {
    const matchesSearch = item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' ? true :
                         filterType === 'upcoming' ? isUpcoming(item.startDate) :
                         !isUpcoming(item.startDate);
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
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                Agenda de Eventos
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {events.length} {events.length === 1 ? 'evento registado' : 'eventos registados'}
              </p>
            </div>
            <Button 
              onClick={openCreate} 
              className="bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Plus className="mr-2 h-5 w-5" />
              Novo Evento
            </Button>
          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Pesquisar por título ou local..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <button
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filterType === 'all'
                    ? 'bg-[#002059] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterType('upcoming')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  filterType === 'upcoming'
                    ? 'bg-[#129DE4] text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <CalendarCheck className="h-4 w-4" />
                Próximos
              </button>
              <button
                onClick={() => setFilterType('past')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${
                  filterType === 'past'
                    ? 'bg-gray-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <CalendarX className="h-4 w-4" />
                Passados
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {isLoading ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center border border-gray-200 dark:border-gray-700">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#129DE4] mx-auto mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">Carregando eventos...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center border border-gray-200 dark:border-gray-700">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Nenhum evento encontrado
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm ? 'Tente pesquisar com outros termos' : 'Comece adicionando um novo evento'}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredEvents.map((item: any) => {
              const upcoming = isUpcoming(item.startDate);
              return (
                <div 
                  key={item.id} 
                  className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-[#129DE4] transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    
                    {/* Date Badge */}
                    <div className={`flex-shrink-0 w-24 h-24 rounded-xl flex flex-col items-center justify-center text-white shadow-lg ${
                      upcoming 
                        ? 'bg-gradient-to-br from-[#129DE4] to-[#0D7AB8]' 
                        : 'bg-gradient-to-br from-gray-400 to-gray-500'
                    }`}>
                      <div className="text-3xl font-bold">
                        {new Date(item.startDate).getDate()}
                      </div>
                      <div className="text-xs uppercase font-semibold">
                        {new Date(item.startDate).toLocaleDateString('pt-PT', { month: 'short' })}
                      </div>
                      <div className="text-xs opacity-90">
                        {new Date(item.startDate).getFullYear()}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-start gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0D7AB8] transition-colors flex-1">
                            {item.title}
                          </h3>
                          {upcoming && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E6F4FF] text-[#0D7AB8] dark:bg-[#0D7AB8]/20 dark:text-[#8DD1FF]">
                              Em breve
                            </span>
                          )}
                        </div>
                        {item.category && (
                          <span className="inline-block px-3 py-1 bg-[#E6F4FF] dark:bg-[#0D7AB8]/20 text-[#0D7AB8] dark:text-[#8DD1FF] text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#129DE4]" />
                          <span>
                            <strong>Início:</strong> {formatTimeOnly(item.startDate)}
                          </span>
                        </div>
                        {item.endDate && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#129DE4]" />
                            <span>
                              <strong>Fim:</strong> {formatTimeOnly(item.endDate)}
                            </span>
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-2 sm:col-span-2">
                            <MapPin className="h-4 w-4 text-[#129DE4]" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      {item.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex lg:flex-col gap-2 justify-end">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => openEdit(item)}
                        className="flex-1 lg:flex-none hover:bg-[#E6F4FF] hover:text-[#0D7AB8] hover:border-[#0D7AB8] dark:hover:bg-[#0D7AB8]/20 transition-colors"
                      >
                        <Pencil className="h-4 w-4 lg:mr-0 mr-2" />
                        <span className="lg:hidden">Editar</span>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDelete(item.id)}
                        className="flex-1 lg:flex-none hover:bg-red-50 hover:text-red-600 hover:border-red-600 dark:hover:bg-red-950/30 transition-colors"
                      >
                        <Trash2 className="h-4 w-4 lg:mr-0 mr-2" />
                        <span className="lg:hidden">Eliminar</span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Footer */}
        {!isLoading && filteredEvents.length > 0 && (
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#129DE4]" />
                <span className="text-gray-600 dark:text-gray-400">
                  Próximos: <strong className="text-gray-900 dark:text-white">
                    {events.filter((e: any) => isUpcoming(e.startDate)).length}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  Passados: <strong className="text-gray-900 dark:text-white">
                    {events.filter((e: any) => !isUpcoming(e.startDate)).length}
                  </strong>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <EventModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchData}
        initialData={selectedItem}
      />
    </div>
  );
}