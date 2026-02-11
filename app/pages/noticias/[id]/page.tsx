'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, Share2, Clock, Newspaper } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import api from "@/service/api";

type NoticiaDetalhes = {
  id: string;
  title: string;
  category: string;
  publishedAt: string;
  author?: string;
  content: string;
  summary?: string;
  tags?: string[];
  imageUrl?: string;
  source?: string;
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

export default function NoticiaDetalhesPage() {
  const params = useParams();
  const [noticia, setNoticia] = useState<NoticiaDetalhes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params.id) {
      fetchNoticia(params.id as string);
    }
  }, [params.id]);

  const fetchNoticia = async (id: string) => {
    setLoading(true);
    try {
      const res = await api.get(`/news/${id}`);
      const item = res.data;

      const detalhes: NoticiaDetalhes = {
        id: String(item.id),
        title: item.title || "Sem título",
        category: item.category || "Notícia",
        publishedAt: item.publishedAt || item.createdAt || "",
        author: item.author || "Equipe CEBEA",
        content: item.content || "Conteúdo não disponível.",
        summary: item.summary,
        tags: item.tags || [],
        imageUrl: item.imageUrl || item.image,
        source: item.source,
      };

      setNoticia(detalhes);
    } catch (err: any) {
      setError("Não foi possível carregar os detalhes da notícia.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: noticia?.title,
        text: noticia?.summary,
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
          <p className="text-[#002059]/70">A carregar notícia...</p>
        </div>
      </div>
    );
  }

  if (error || !noticia) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Notícia não encontrada"}</p>
          <Link href="/pages/noticias-eventos">
            <Button variant="outline" className="border-[#14E259] text-[#14E259] hover:bg-[#14E259]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às notícias
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
              Voltar às Notícias
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <span className="text-sm font-medium text-[#14E259]">{noticia.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-4">
              {noticia.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{noticia.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(noticia.publishedAt)}</span>
              </div>
              {noticia.publishedAt && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{formatTime(noticia.publishedAt)}</span>
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
              {noticia.imageUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img 
                    src={noticia.imageUrl} 
                    alt={noticia.title}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              )}

              {/* Summary */}
              {noticia.summary && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border border-[#14E259]/10"
                >
                  <p className="text-lg text-[#002059] leading-relaxed font-medium">
                    {noticia.summary}
                  </p>
                </motion.div>
              )}

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                  <Newspaper className="h-8 w-8 text-[#14E259]" />
                  Notícia Completa
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-[#002059] leading-relaxed whitespace-pre-wrap text-lg">
                    {noticia.content}
                  </p>
                </div>
              </motion.div>

              {/* Tags */}
              {noticia.tags && noticia.tags.length > 0 && (
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
                    {noticia.tags.map((tag, index) => (
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
                      Informações da Notícia
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Categoria
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {noticia.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Data de Publicação
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#129DE4]" />
                          {formatDate(noticia.publishedAt)}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Autor
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <User className="h-4 w-4 text-[#129DE4]" />
                          {noticia.author}
                        </p>
                      </div>

                      {noticia.source && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Fonte
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {noticia.source}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#002059]/10">
                      <Button 
                        onClick={handleShare}
                        className="w-full bg-[#14E259] hover:bg-[#12c950] text-white"
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