'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Users, Tag, Share2, Clock, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import api from "@/service/api";

type EventoDetalhes = {
  id: string;
  title: string;
  category: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  objectives?: string[];
  targetAudience?: string;
  organizer?: string;
  maxParticipants?: number;
  registrationUrl?: string;
  imageUrl?: string;
  tags?: string[];
};

const formatDate = (value?: string | null) => {
  if (!value) return "-";
  const date = new Date(value);
  if (isNaN(date.getTime())) return value;
  
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const formatTime = (value?: string | null) => {
  if (!value) return "";
  const date = new Date(value);
  if (isNaN(date.getTime())) return "";
  
  return date.toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function EventoDetalhesPage() {
  const params = useParams();
  const [evento, setEvento] = useState<EventoDetalhes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params.id) {
      fetchEvento(params.id as string);
    }
  }, [params.id]);

  const fetchEvento = async (id: string) => {
    setLoading(true);
    try {
      // Tenta buscar como evento primeiro, depois como workshop
      let res;
      try {
        res = await api.get(`/events/${id}`);
      } catch {
        res = await api.get(`/workshops/${id}`);
      }
      
      const item = res.data;

      const detalhes: EventoDetalhes = {
        id: String(item.id),
        title: item.title || "Sem título",
        category: item.category || "Evento",
        startDate: item.startDate || item.createdAt || "",
        endDate: item.endDate,
        location: item.location || "Online",
        description: item.description || "Descrição não disponível.",
        objectives: item.objectives || [],
        targetAudience: item.targetAudience || item.audience,
        organizer: item.organizer || "CEBEA",
        maxParticipants: item.maxParticipants,
        registrationUrl: item.registrationUrl || item.registrationLink,
        imageUrl: item.imageUrl || item.image,
        tags: item.tags || [],
      };

      setEvento(detalhes);
    } catch (err: any) {
      setError("Não foi possível carregar os detalhes do evento.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: evento?.title,
        text: evento?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#14E259] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#002059]/70">A carregar evento...</p>
        </div>
      </div>
    );
  }

  if (error || !evento) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Evento não encontrado"}</p>
          <Link href="/pages/noticias-eventos">
            <Button variant="outline" className="border-[#14E259] text-[#14E259] hover:bg-[#14E259]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos eventos
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002059] via-[#003580] to-[#129DE4] py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/pages/noticias-eventos">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Eventos
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <span className="text-sm font-medium text-[#14E259]">{evento.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4">
              {evento.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {formatDate(evento.startDate)}
                  {evento.endDate && ` - ${formatDate(evento.endDate)}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{evento.location}</span>
              </div>
              {evento.organizer && (
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{evento.organizer}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Image */}
              {evento.imageUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-lg relative aspect-video"
                >
                  <Image
                    src={evento.imageUrl}
                    alt={evento.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                    unoptimized={evento.imageUrl.startsWith("http")}
                  />
                </motion.div>
              )}

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-[#14E259]" />
                  Sobre o Evento
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                <p className="text-lg text-[#002059] leading-relaxed">
                  {evento.description}
                </p>
              </motion.div>

              {/* Objectives */}
              {evento.objectives && evento.objectives.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <Target className="h-8 w-8 text-[#14E259]" />
                    Objetivos
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <ul className="space-y-3">
                    {evento.objectives.map((objective, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#14E259]"></span>
                        <span className="text-[#002059]">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Tags */}
              {evento.tags && evento.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-[#002059] mb-4 flex items-center gap-2">
                    <Tag className="h-6 w-6 text-[#14E259]" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {evento.tags.map((tag, index) => (
                      <div 
                        key={index} 
                        className="relative px-4 py-2 bg-white border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 rounded-lg shadow-sm overflow-hidden group"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                        <span className="text-sm font-medium text-[#002059] ml-2">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 overflow-hidden bg-white sticky top-24">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      Informações do Evento
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Categoria
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {evento.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Data de Início
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#129DE4]" />
                          {formatDate(evento.startDate)}
                        </p>
                        {evento.startDate && (
                          <p className="text-xs text-[#002059]/70 ml-6">
                            {formatTime(evento.startDate)}
                          </p>
                        )}
                      </div>

                      {evento.endDate && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Data de Término
                          </p>
                          <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-[#129DE4]" />
                            {formatDate(evento.endDate)}
                          </p>
                          {evento.endDate && (
                            <p className="text-xs text-[#002059]/70 ml-6">
                              {formatTime(evento.endDate)}
                            </p>
                          )}
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Local
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#129DE4]" />
                          {evento.location}
                        </p>
                      </div>

                      {evento.organizer && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Organizador
                          </p>
                          <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#129DE4]" />
                            {evento.organizer}
                          </p>
                        </div>
                      )}

                      {evento.targetAudience && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Público-Alvo
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {evento.targetAudience}
                          </p>
                        </div>
                      )}

                      {evento.maxParticipants && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Vagas
                          </p>
                          <p className="text-sm font-medium text-[#14E259]">
                            {evento.maxParticipants} participantes
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#002059]/10 space-y-3">
                      {evento.registrationUrl && (
                        <a href={evento.registrationUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-[#14E259] hover:bg-[#12c950] text-white">
                            <Users className="mr-2 h-4 w-4" />
                            Inscrever-se
                          </Button>
                        </a>
                      )}

                      <Button 
                        onClick={handleShare}
                        variant="outline"
                        className="w-full border-[#129DE4] text-[#129DE4] hover:bg-[#129DE4]/10"
                      >
                        <Share2 className="mr-2 h-4 w-4" />
                        Compartilhar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}