'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag, FileText, Download, ExternalLink, BookOpen, Award, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import api from "@/service/api";

type PublicacaoDetalhes = {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  autor: string;
  etiqueta: string;
  conteudo?: string;
  abstract?: string;
  keywords?: string[];
  doi?: string;
  url?: string;
  pdfUrl?: string;
  revista?: string;
  volume?: string;
  paginas?: string;
  editora?: string;
};

const formatDate = (value?: string | number | null) => {
  if (!value) return "-";
  if (typeof value === "number" || (typeof value === "string" && value.length === 4)) 
    return String(value);
  
  const date = new Date(value);
  if (isNaN(date.getTime())) return String(value);
  
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default function PublicacaoDetalhesPage() {
  const params = useParams();
  const [publicacao, setPublicacao] = useState<PublicacaoDetalhes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params.id) {
      fetchPublicacao(params.id as string);
    }
  }, [params.id]);

  const fetchPublicacao = async (id: string) => {
    setLoading(true);
    try {
      const res = await api.get(`/publications/${id}`);
      const item = res.data;

      const detalhes: PublicacaoDetalhes = {
        id: String(item.id),
        titulo: item.title || "Sem título",
        tipo: item.type || "Publicação",
        descricao: item.description || "Sem descrição disponível.",
        data: formatDate(item.year || item.createdAt),
        autor: item.authors || "Autor não especificado",
        etiqueta: item.theme || "",
        conteudo: item.content || item.fullText,
        abstract: item.abstract,
        keywords: item.keywords || [],
        doi: item.doi,
        url: item.url,
        pdfUrl: item.pdfUrl || item.fileUrl,
        revista: item.journal || item.revista,
        volume: item.volume,
        paginas: item.pages || item.paginas,
        editora: item.publisher || item.editora,
      };

      setPublicacao(detalhes);
    } catch (err: any) {
      setError("Não foi possível carregar os detalhes da publicação.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#14E259] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#002059]/70">A carregar publicação...</p>
        </div>
      </div>
    );
  }

  if (error || !publicacao) {
    return (
      <div className="min-h-screen flex items-center justify-center mb-10">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Publicação não encontrada"}</p>
          <Link href="/publicacoes">
            <Button variant="outline" className="border-[#14E259] text-[#14E259] hover:bg-[#14E259]/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às publicações
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Simplificado */}
      <section className="relative bg-linear-to-br from-[#002059] via-[#003580] to-[#129DE4] py-16 mt-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/pages/publicacao">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Publicações
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
                <span className="text-sm font-medium text-[#14E259]">{publicacao.tipo}</span>
              </div>

              {publicacao.etiqueta && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Tag className="h-3 w-3 text-white" />
                  <span className="text-sm font-medium text-white">{publicacao.etiqueta}</span>
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {publicacao.titulo}
            </h1>

            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{publicacao.autor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{publicacao.data}</span>
              </div>
              {publicacao.revista && (
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>{publicacao.revista}</span>
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
              {/* Descrição */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-[#14E259]" />
                  Visão Geral
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                <p className="text-lg text-[#002059] leading-relaxed">
                  {publicacao.descricao}
                </p>
              </motion.div>

              {/* Abstract */}
              {publicacao.abstract && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <FileText className="h-8 w-8 text-[#14E259]" />
                    Resumo
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <div className="bg-gradient-to-br from-[#f8fafc] to-white p-6 rounded-xl border border-[#14E259]/10">
                    <p className="text-lg text-[#002059] leading-relaxed">
                      {publicacao.abstract}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Conteúdo Completo */}
              {publicacao.conteudo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-[#14E259]" />
                    Conteúdo
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-[#002059] leading-relaxed whitespace-pre-wrap">
                      {publicacao.conteudo}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Keywords */}
              {publicacao.keywords && publicacao.keywords.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <Tag className="h-8 w-8 text-[#14E259]" />
                    Palavras-chave
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <div className="flex flex-wrap gap-3">
                    {publicacao.keywords.map((keyword, index) => (
                      <div 
                        key={index} 
                        className="relative px-4 py-2 bg-white border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 rounded-lg shadow-sm overflow-hidden group"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                        <span className="text-sm font-medium text-[#002059] ml-2">
                          {keyword}
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
                      Informações da Publicação
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Tipo
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {publicacao.tipo}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Data de Publicação
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#129DE4]" />
                          {publicacao.data}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Autor(es)
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <User className="h-4 w-4 text-[#129DE4]" />
                          {publicacao.autor}
                        </p>
                      </div>

                      {publicacao.revista && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Revista/Jornal
                          </p>
                          <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-[#129DE4]" />
                            {publicacao.revista}
                          </p>
                        </div>
                      )}

                      {publicacao.volume && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Volume
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {publicacao.volume}
                          </p>
                        </div>
                      )}

                      {publicacao.paginas && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Páginas
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {publicacao.paginas}
                          </p>
                        </div>
                      )}

                      {publicacao.editora && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Editora
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {publicacao.editora}
                          </p>
                        </div>
                      )}

                      {publicacao.doi && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            DOI
                          </p>
                          <p className="text-xs font-medium text-[#002059] font-mono break-all">
                            {publicacao.doi}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#002059]/10 space-y-3">
                      {publicacao.pdfUrl && (
                        <a href={publicacao.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-[#14E259] hover:bg-[#12c950] text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Descarregar PDF
                          </Button>
                        </a>
                      )}

                      {publicacao.url && (
                        <a href={publicacao.url} target="_blank" rel="noopener noreferrer">
                          <Button 
                            variant="outline" 
                            className="w-full border-[#129DE4] text-[#129DE4] hover:bg-[#129DE4]/10"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Online
                          </Button>
                        </a>
                      )}
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