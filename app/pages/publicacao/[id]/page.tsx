"use client"

import { use } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, User, ExternalLink, FileText, Download, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PubDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [pub, setPub] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPub = async () => {
      try {
        const res = await fetch(`/api/publicacao?id=${id}`);
        if (!res.ok) throw new Error("Erro ao carregar publicação");
        const data = await res.json();
        setPub(data);
      } catch (err: any) {
        setError(err.message || "Erro ao carregar publicação");
      } finally {
        setLoading(false);
      }
    };
    fetchPub();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#14E259] mx-auto"></div>
          <p className="mt-4 text-[#002059]">Carregando...</p>
        </div>
      </div>
    );
  }

  if (error || !pub) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-[#002059] mb-4">Publicação não encontrada</h2>
            <p className="text-[#002059]/70 mb-6">{error || "A publicação que procura não existe."}</p>
            <Link href="/pages/publicacao">
              <Button className="bg-[#14E259] hover:bg-[#12c94e] text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar às Publicações
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-[#002059] via-[#002059]/90 to-[#002059]">
        <div className="absolute inset-0 bg-[#14E259]/5"></div>
        <div className="container relative z-10 mx-auto max-w-5xl">
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
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <BookOpen className="w-4 h-4 text-[#14E259]" />
              <span className="text-sm font-medium text-[#14E259]">{pub.tipo || "Publicação"}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {pub.titulo || pub.nome}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              {pub.autor && (
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[#14E259]" />
                  <span>{pub.autor}</span>
                </div>
              )}
              {pub.data && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#14E259]" />
                  <span>{pub.data}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {pub.descricao && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <FileText className="h-8 w-8 text-[#14E259]" />
                    Resumo
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <p className="text-lg text-[#002059] leading-relaxed">
                    {pub.descricao}
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-[#002059] mb-4">Informações</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 bg-white">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="p-6 space-y-4">
                    {pub.etiqueta && (
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">Impact Factor</p>
                        <p className="text-sm font-medium text-[#14E259]">{pub.etiqueta}</p>
                      </div>
                    )}
                    {pub.journal && (
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">Revista/Journal</p>
                        <p className="text-sm font-medium text-[#002059]">{pub.journal}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 bg-white sticky top-24">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      Ações
                    </h3>
                    <Button className="w-full bg-[#14E259] hover:bg-[#12c94e] text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Baixar PDF
                    </Button>
                    <Button variant="outline" className="w-full border-[#14E259]/30 hover:bg-[#14E259] hover:text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Online
                    </Button>
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
