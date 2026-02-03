"use client"

import { use } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ArrowLeft, ExternalLink, Award, MapPin, Target, Lightbulb, FileText, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { getProjetoBySlug } from "@/data/projectDetails";

export default function ProjetoDetalhes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const projeto = getProjetoBySlug(slug);

  if (!projeto) {
    notFound();
  }





  return (  
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={projeto.image}
            alt={projeto.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link href="/pages/pesquisas">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Pesquisas
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <span className="text-sm font-medium text-[#14E259]">{projeto.status}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {projeto.title}
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mb-6">
              {projeto.description}
            </p>

            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{projeto.periodo}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{projeto.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{projeto.partners.length} Parceiros</span>
              </div>
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
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-[#14E259]" />
                  Visão Geral
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                <p className="text-lg text-[#002059] leading-relaxed">
                  {projeto.fullDescription}
                </p>
              </motion.div>

              {/* Objectives */}
              {projeto.objectives && projeto.objectives.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <Target className="h-8 w-8 text-[#14E259]" />
                    Objetivos
                  </h2>
                  <div className="w-24 h-1 bg-linear-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <ul className="space-y-3">
                    {projeto.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#14E259]"></span>
                        <span className="text-[#002059]">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Results */}
              {projeto.results && projeto.results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                    <Award className="h-8 w-8 text-[#14E259]" />
                    Resultados Alcançados
                  </h2>
                  <div className="w-24 h-1 bg-linear-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {projeto.results.map((result: string, index: number) => (
                      <Card key={index} className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                        <CardContent className="p-4">
                          <p className="text-[#002059] text-sm">{result}</p>
                        </CardContent>
                      </Card>
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
                      Informações do Projeto
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Status
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {projeto.status}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Período
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#129DE4]" />
                          {projeto.periodo}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                          Localização
                        </p>
                        <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#129DE4]" />
                          {projeto.location}
                        </p>
                      </div>

                      {projeto.coordenador && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Coordenador
                          </p>
                          <p className="text-sm font-medium text-[#002059] flex items-center gap-2">
                            <User className="h-4 w-4 text-[#129DE4]" />
                            {projeto.coordenador}
                          </p>
                        </div>
                      )}

                      {projeto.duracao && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Duração
                          </p>
                          <p className="text-sm font-medium text-[#002059]">
                            {projeto.duracao}
                          </p>
                        </div>
                      )}

                      {projeto.funding && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1">
                            Financiamento
                          </p>
                          <p className="text-sm font-medium text-[#14E259]">
                            {projeto.funding}
                          </p>
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-2">
                          Parceiros
                        </p>
                        <div className="space-y-2">
                          {projeto.partners.map((partner: string, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#14E259]"></span>
                              <span className="text-sm text-[#002059]">{partner}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
{/**<Button className="w-full bg-[#129DE4] hover:bg-[#0d8bc7] text-white">
                      <FileText className="mr-2 h-4 w-4" />
                      Ver Relatório
                    </Button> */}
                    
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
