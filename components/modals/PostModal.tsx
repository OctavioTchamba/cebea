// src/app/admin/dashboard/posts/components/PublicationModal.tsx
'use client';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/service/api";
import { toast } from "react-hot-toast";
import { X, BookOpen, Users, Calendar, FileText, Tag, Save } from "lucide-react";

export default function PublicationModal({ isOpen, onClose, onSuccess, initialData }: any) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (initialData) reset(initialData);
    else reset({ title: '', type: '', theme: '', authors: '', description: '', year: new Date().getFullYear(), published: true });
  }, [initialData, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        title: data.title,
        type: data.type,
        theme: data.theme,
        authors: data.authors,
        description: data.description || "",
        year: Number(data.year),
        published: Boolean(data.published),
      };
  
      if (initialData) {
        await api.patch(`/publications/${initialData.id}`, payload);
        toast.success("Publicação atualizada com sucesso!");
      } else {
        await api.post('/publications', payload);
        toast.success("Publicação criada com sucesso!");
      }
      onSuccess();
      onClose();
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.message || "Erro ao salvar publicação");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002059] to-[#003580] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {initialData ? 'Editar Publicação' : 'Nova Publicação'}
              </h2>
              <p className="text-blue-100 text-sm mt-0.5">
                Preencha os dados abaixo
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/10 rounded-full h-10 w-10 p-0"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto">
          <div className="p-8 space-y-6">
            
            {/* Title */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FileText className="h-4 w-4 text-[#129DE4]" />
                Título da Publicação
              </label>
              <Input 
                {...register("title", { required: "O título é obrigatório" })} 
                placeholder="Ex: Estudo sobre a Flora da Huíla"
                className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
              />
              {errors.title && (
                <p className="text-xs text-red-500">{errors.title.message as string}</p>
              )}
            </div>

            {/* Type and Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Tag className="h-4 w-4 text-[#129DE4]" />
                  Tipo
                </label>
                <Input 
                  {...register("type")} 
                  placeholder="Ex: Artigo Científico"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <BookOpen className="h-4 w-4 text-[#129DE4]" />
                  Tema
                </label>
                <Input 
                  {...register("theme")} 
                  placeholder="Ex: Botânica"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
              </div>
            </div>

            {/* Authors */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Users className="h-4 w-4 text-[#129DE4]" />
                Autores
              </label>
              <Input 
                {...register("authors")} 
                placeholder="Nomes separados por vírgula"
                className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
              />
            </div>

            {/* Year and Published */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Calendar className="h-4 w-4 text-[#129DE4]" />
                  Ano de Publicação
                </label>
                <Input 
                  type="number" 
                  {...register("year")}
                  min="1900"
                  max="2100"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block mb-3">
                  Estado
                </label>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                  <input 
                    type="checkbox" 
                    {...register("published")} 
                    id="pub" 
                    className="w-5 h-5 text-[#129DE4] bg-white border-gray-300 rounded focus:ring-[#129DE4] focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="pub" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                    Publicar imediatamente
                  </label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FileText className="h-4 w-4 text-[#129DE4]" />
                Descrição / Resumo
              </label>
              <textarea 
                {...register("description")} 
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#129DE4] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-none"
                placeholder="Breve descrição ou resumo da publicação..."
              />
            </div>

          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 px-8 py-6 bg-gray-50 dark:bg-gray-800/50 flex flex-col sm:flex-row justify-end gap-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="order-2 sm:order-1"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="order-1 sm:order-2 bg-gradient-to-r from-[#129DE4] to-[#0D7AB8] hover:from-[#0D7AB8] hover:to-[#129DE4] text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Save className="mr-2 h-4 w-4" />
              {initialData ? 'Atualizar' : 'Criar'} Publicação
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}
