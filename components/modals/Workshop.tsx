'use client';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Se não tiver esse componente, use <textarea className="..." />
import api from "@/service/api";
import { toast } from "react-hot-toast";

export default function WorkshopModal({ isOpen, onClose, onSuccess, initialData }: any) {
  const { register, handleSubmit, reset, setValue, watch } = useForm();
  
  // Observa o título para gerar o slug automaticamente
  const titleValue = watch("title");

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        startDate: initialData.startDate?.slice(0, 16),
        endDate: initialData.endDate?.slice(0, 16)
      });
    } else {
      reset({ title: '', slug: '', description: '', instructor: '', location: '', capacity: 20, published: true });
    }
  }, [initialData, reset]);

  // Gera o slug automaticamente quando o utilizador escreve o título (apenas se for criar novo)
  useEffect(() => {
    if (!initialData && titleValue) {
      const generatedSlug = titleValue
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9]+/g, "-") // Substitui espaços e chars especiais por hífen
        .replace(/^-+|-+$/g, ""); // Remove hifens do início/fim
      setValue("slug", generatedSlug);
    }
  }, [titleValue, initialData, setValue]);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    try {
      // 1. Limpeza e Formatação (Garante que nenhum campo obrigatório vá undefined)
      const payload = {
        title: data.title?.trim() || "",
        slug: data.slug?.trim().toLowerCase() || "",
        description: data.description?.trim() || "",
        instructor: data.instructor?.trim() || null, // Se for opcional no Zod, use null ou string vazia
        location: data.location?.trim() || null,
        // Se o Zod espera número, garanta a conversão
        capacity: data.capacity ? Number(data.capacity) : 0, 
        // O Zod/Drizzle espera objeto Date ou string ISO? Geralmente string ISO
        startDate: data.startDate ? new Date(data.startDate).toISOString() : null,
        endDate: data.endDate ? new Date(data.endDate).toISOString() : null,
        published: Boolean(data.published),
      };
  
      // 2. Envio para a API
      if (initialData) {
        await api.patch(`/workshops/${initialData.id}`, payload);
        toast.success("Workshop atualizado!");
      } else {
        await api.post('/workshops', payload);
        toast.success("Workshop criado!");
      }
  
      onSuccess();
      onClose();
    } catch (error: any) {
      // 3. Captura amigável de erros do Zod
      console.error("Erro completo:", error.response?.data);
      
      if (error.response?.data?.errors) {
        // Se o erro vier como array de mensagens (padrão Zod)
        const errorMsg = error.response.data.errors.map((e: any) => e.message).join(", ");
        toast.error(`Erro de validação: ${errorMsg}`);
      } else {
        toast.error(error.response?.data?.message || "Erro ao processar workshop");
      }
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#002059]">Configurar Workshop</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-sm font-medium">Título do Workshop *</label>
            <Input {...register("title")} required placeholder="Ex: Introdução à Botânica" />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Slug (URL Automática) *</label>
            <Input {...register("slug")} required placeholder="ex: introducao-a-botanica" />
            <p className="text-xs text-gray-400 mt-1">Identificador único para o link do evento.</p>
          </div>

          <div className="col-span-2">
             <label className="text-sm font-medium">Descrição *</label>
             <textarea 
               {...register("description")} 
               required 
               className="w-full border rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#129DE4]"
               placeholder="Detalhes sobre o workshop..."
             />
          </div>

          <div>
            <label className="text-sm font-medium">Instrutor</label>
            <Input {...register("instructor")} placeholder="Nome do formador" />
          </div>
          
          <div>
            <label className="text-sm font-medium">Localização</label>
            <Input {...register("location")} placeholder="Ex: Sala 304" />
          </div>

          <div>
            <label className="text-sm font-medium">Capacidade (vagas)</label>
            <Input type="number" {...register("capacity")} required />
          </div>
          
          <div className="flex items-center gap-2 mt-8">
             <input type="checkbox" {...register("published")} id="pub_w" className="w-4 h-4" />
             <label htmlFor="pub_w" className="text-sm">Publicar no site</label>
          </div>

          <div>
            <label className="text-sm font-medium">Início</label>
            <Input type="datetime-local" {...register("startDate")} required />
          </div>

          <div>
            <label className="text-sm font-medium">Fim</label>
            <Input type="datetime-local" {...register("endDate")} required />
          </div>

          <div className="col-span-2 flex justify-end gap-3 pt-6 border-t mt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
            <Button type="submit" className="bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4]">
              {initialData ? 'Atualizar' : 'Criar Workshop'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}