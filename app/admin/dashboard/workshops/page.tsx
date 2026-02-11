'use client';
import { useState, useEffect } from "react";
import api from "@/service/api";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, Users } from "lucide-react";
import { toast } from "react-hot-toast";
import WorkshopModal from "@/components/modals/Workshop"; 

export default function WorkshopsPage() {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const res = await api.get('/workshops');
      setWorkshops(res.data);
    } catch (error) {
      toast.error("Erro ao carregar workshops");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Tem a certeza? Isso não pode ser desfeito.")) return;
    try {
      await api.delete(`/workshops/${id}`);
      toast.success("Workshop removido");
      fetchData();
    } catch (error) {
      toast.error("Erro ao remover");
    }
  };

  const openCreate = () => { setSelectedItem(null); setIsModalOpen(true); };
  const openEdit = (item: any) => { setSelectedItem(item); setIsModalOpen(true); };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2 text-[#002059]">
          <Users className="text-[#129DE4]" /> Formações e Workshops
        </h1>
        <Button onClick={openCreate} className="bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4]">
          <Plus className="mr-2 h-4 w-4" /> Novo Workshop
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Título</th>
              <th className="p-4 font-semibold text-gray-600">Instrutor</th>
              <th className="p-4 font-semibold text-gray-600">Data Início</th>
              <th className="p-4 font-semibold text-gray-600">Vagas</th>
              <th className="p-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
               <tr><td colSpan={5} className="p-8 text-center text-gray-400">Carregando...</td></tr>
            ) : workshops.map((item: any) => (
              <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{item.title}</td>
                <td className="p-4 text-sm text-gray-500">{item.instructor || 'A definir'}</td>
                <td className="p-4 text-sm">{new Date(item.startDate).toLocaleDateString()}</td>
                <td className="p-4 text-sm font-bold text-gray-700">{item.capacity}</td>
                <td className="p-4 text-right space-x-2">
                  <Button variant="outline" size="sm" onClick={() => openEdit(item)}><Pencil className="h-4 w-4" /></Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)}><Trash2 className="h-4 w-4" /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <WorkshopModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchData}
        initialData={selectedItem}
      />
    </div>
  );
}