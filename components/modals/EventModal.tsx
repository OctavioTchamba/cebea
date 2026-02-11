// src/app/admin/dashboard/events/components/EventModal.tsx
'use client';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/service/api";
import { toast } from "react-hot-toast";
import { X, Calendar, MapPin, Clock, FileText, Tag, Save, AlertCircle } from "lucide-react";

export default function EventModal({ isOpen, onClose, onSuccess, initialData }: any) {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();

  useEffect(() => {
    if (initialData) {
      const formattedData = {
        ...initialData,
        startDate: initialData.startDate?.slice(0, 16),
        endDate: initialData.endDate?.slice(0, 16)
      };
      reset(formattedData);
    } else {
      reset({ 
        title: '', 
        category: '', 
        description: '', 
        location: '', 
        published: true 
      });
    }
  }, [initialData, reset]);

  if (!isOpen) return null;

  const onSubmit = async (data: any) => {
    try {
      // Preparação dos dados conforme o seu Zod Schema
      const payload = {
        title: data.title?.trim(),
        category: data.category?.trim(),
        description: data.description?.trim(),
        // Se location for vazio, enviamos undefined para o Zod tratar como opcional
        location: data.location?.trim() || undefined, 
        startDate: data.startDate, // O z.coerce.date() vai transformar a string em Date
        endDate: data.endDate || undefined,
        published: Boolean(data.published),
      };
  
      // Validação preventiva no front para evitar o 400
      if (!payload.title || !payload.category || !payload.description || !payload.startDate) {
        toast.error("Preencha todos os campos obrigatórios (*)");
        return;
      }
  
      if (initialData) {
        await api.patch(`/events/${initialData.id}`, payload);
        toast.success("Evento atualizado com sucesso!");
      } else {
        await api.post('/events', payload);
        toast.success("Evento criado com sucesso!");
      }
  
      onSuccess();
      onClose();
    } catch (error: any) {
      // Captura os detalhes do erro do Zod vindos do backend
      console.error("Erro de validação:", error.response?.data);
      const msg = error.response?.data?.message || "Erro nos dados enviados.";
      toast.error(msg);
    }
  };

  const descriptionValue = watch("description", "");
  const titleValue = watch("title", "");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002059] to-[#003580] px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                {initialData ? 'Editar Evento' : 'Novo Evento'}
              </h2>
              <p className="text-blue-100 text-sm mt-0.5">
                Preencha os dados do evento
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
                Nome do Evento
                <span className="text-red-500">*</span>
              </label>
              <Input 
                {...register("title", { required: "O título é obrigatório" })} 
                placeholder="Ex: Seminário Internacional de Investigação Científica"
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

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-[#129DE4]" />
                  Data e Hora de Início
                  <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="datetime-local" 
                  {...register("startDate", { required: "A data de início é obrigatória" })} 
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
                {errors.startDate && (
                  <p className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.startDate.message as string}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-[#129DE4]" />
                  Data e Hora de Fim
                </label>
                <Input 
                  type="datetime-local" 
                  {...register("endDate")} 
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
                <p className="text-xs text-gray-500">Opcional</p>
              </div>
            </div>

            {/* Category and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Tag className="h-4 w-4 text-[#129DE4]" />
                  Categoria
                </label>
                <Input 
                  {...register("category")} 
                  placeholder="Ex: Conferência, Workshop, Seminário"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-[#129DE4]" />
                  Localização
                </label>
                <Input 
                  {...register("location")} 
                  placeholder="Ex: Auditório Central ISCED"
                  className="border-gray-300 dark:border-gray-600 focus:border-[#129DE4] focus:ring-[#129DE4]"
                />
                <p className="text-xs text-gray-500">
                  Deixe vazio para eventos online
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <FileText className="h-4 w-4 text-[#129DE4]" />
                Descrição do Evento
                <span className="text-red-500">*</span>
              </label>
              <textarea 
                {...register("description", { required: "A descrição é obrigatória" })} 
                placeholder="Descreva os objetivos, programação e detalhes relevantes do evento..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-[#129DE4] focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 resize-y"
              />
              {errors.description && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.description.message as string}
                </p>
              )}
              <p className="text-xs text-gray-500">
                {descriptionValue.length} caracteres
              </p>
            </div>

            {/* Published Checkbox */}
            <div className="bg-gradient-to-r from-[#E6F4FF] to-[#CDE9FF] dark:from-[#0D7AB8]/20 dark:to-[#0D7AB8]/30 border border-[#CDE9FF] dark:border-[#0D7AB8]/30 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  {...register("published")} 
                  id="isPub" 
                  className="w-5 h-5 text-[#129DE4] bg-white border-gray-300 rounded focus:ring-[#129DE4] focus:ring-2 cursor-pointer"
                />
                <label htmlFor="isPub" className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer select-none">
                  Publicar evento imediatamente (visível no calendário público)
                </label>
              </div>
            </div>

            {/* Helper Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <p className="font-semibold mb-1">Dicas para criar um bom evento:</p>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300 list-disc list-inside">
                    <li>Use um título claro e descritivo</li>
                    <li>Defina datas e horários precisos</li>
                    <li>Inclua informações sobre o local ou link para evento online</li>
                    <li>Descreva a programação e objetivos do evento</li>
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
              {initialData ? 'Atualizar' : 'Criar'} Evento
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
}