// src/app/admin/dashboard/news/components/NewsModal.tsx
'use client';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/service/api";
import { toast } from "react-hot-toast";
import { X, Newspaper, Tag, FileText, Eye, Save, AlertCircle } from "lucide-react";

export default function NewsModal({ isOpen, onClose, onSuccess, initialData }: any) {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

  useEffect(() => {
    reset(initialData || { 
      title: '', 
      category: '', 
      summary: '', 
      content: '', 
      published: true 
    });
  }, [initialData, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    try {
      // 1. Ensure the ID exists
      if (initialData && !initialData.id) {
          throw new Error("ID da notícia não encontrado.");
      }
  
      const payload = {
        title: data.title,
        category: data.category,
        content: data.content,
        summary: data.summary || "", // Use empty string instead of null if DB is strict
        published: Boolean(data.published),
      };
  
      // 2. Only send publishedAt if creating NEW news, 
      // or let the backend handle it automatically.
      if (!initialData && data.published) {
         (payload as any).publishedAt = new Date().toISOString();
      }
  
      if (initialData) {
        await api.patch(`/news/${initialData.id}`, payload);
        toast.success("Notícia atualizada!");
      } else {
        await api.post('/news', payload);
        toast.success("Notícia criada!");
      }
      
      onSuccess();
      onClose();
    } catch (error: any) {
      console.error("PATCH Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Erro interno no servidor.");
    }
  };

  const contentValue = watch("content", "");
  const titleValue = watch("title", "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002059] to-[#003580] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Newspaper className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {initialData ? 'Editar Notícia' : 'Nova Notícia'}
              </h2>
              <p className="text-blue-100 text-sm mt-0.5">
                Preencha os campos para {initialData ? 'atualizar' : 'criar'} a notícia
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
                Título da Notícia
                <span className="text-red-500">*</span>
              </label>
              <Input 
                {...register("title", { required: "O título é obrigatório" })} 
                placeholder="Ex: ISCED Huíla recebe prémio de excelência"
                className="text-lg font-semibold border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
              />
              {errors.title && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.title.message as string}
                </p>
              )}
              <p className="text-xs text-gray-500">
                {titleValue.length}/100 caracteres
              </p>
            </div>

            {/* Category and Status */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Tag className="h-4 w-4 text-[#129DE4]" />
                  Categoria
                </label>
                <Input 
                  {...register("category")} 
                  placeholder="Ex: Pesquisa, Eventos, Académico"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">
                  Visibilidade
                </label>
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#E6F4FF] to-[#CDE9FF] dark:from-[#0D7AB8]/20 dark:to-[#0D7AB8]/30 rounded-lg border border-[#CDE9FF] dark:border-[#0D7AB8]/30">
                  <input 
                    type="checkbox" 
                    {...register("published")} 
                    id="isPub" 
                    className="w-5 h-5 text-[#129DE4] bg-white border-gray-300 rounded focus:ring-[#129DE4] focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="isPub" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                    <Eye className="h-4 w-4 text-[#129DE4]" />
                    Publicar imediatamente
                  </label>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FileText className="h-4 w-4 text-[#129DE4]" />
                Resumo / Subtítulo
              </label>
              <Input 
                {...register("summary")} 
                placeholder="Breve descrição da notícia (aparece nos cards de preview)"
                className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
              />
              <p className="text-xs text-gray-500">
                Opcional - usado para pré-visualizações
              </p>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Newspaper className="h-4 w-4 text-[#129DE4]" />
                Conteúdo Completo
                <span className="text-red-500">*</span>
              </label>
              <textarea 
                {...register("content", { required: "O conteúdo é obrigatório" })} 
                placeholder="Escreva aqui o conteúdo completo da notícia..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[300px] focus:outline-none focus:ring-2 focus:ring-[#129DE4] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y font-mono text-sm leading-relaxed"
              />
              {errors.content && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.content.message as string}
                </p>
              )}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{contentValue.length} caracteres</span>
                <span>Aproximadamente {Math.ceil(contentValue.split(' ').length / 200)} min de leitura</span>
              </div>
            </div>

            {/* Helper Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <p className="font-semibold mb-1">Dicas para uma boa notícia:</p>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300 list-disc list-inside">
                    <li>Use um título claro e objetivo</li>
                    <li>Inclua informações relevantes no resumo</li>
                    <li>Estruture o conteúdo em parágrafos curtos</li>
                    <li>Revise antes de publicar</li>
                  </ul>
                </div>
              </div>
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
              {initialData ? 'Atualizar' : 'Publicar'} Notícia
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}