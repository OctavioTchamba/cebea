"use client"

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Tag, Megaphone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";

const eventosData: Record<string, any> = {
  "forum-biodiversidade": {
    title: "Fórum Regional de Biodiversidade e Conservação",
    date: "18–20 Abril 2025",
    location: "ISCED-Huíla, Lubango",
    category: "Conferência",
    description: "Três dias de debates sobre conservação, apresentações científicas e oficinas práticas com parceiros nacionais e internacionais.",
    fullDescription: "O Fórum Regional de Biodiversidade e Conservação é um evento de três dias que reúne especialistas, investigadores e profissionais da conservação para debater os desafios e oportunidades na proteção da biodiversidade. O evento inclui apresentações científicas, mesas-redondas, oficinas práticas e oportunidades de networking.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
    schedule: [
      { day: "Dia 1 - 18 Abril", activities: ["Abertura e keynote", "Sessões paralelas de apresentações", "Poster session"] },
      { day: "Dia 2 - 19 Abril", activities: ["Mesas-redondas temáticas", "Oficinas práticas", "Networking"] },
      { day: "Dia 3 - 20 Abril", activities: ["Workshops", "Encerramento e conclusões"] }
    ],
    speakers: ["Especialistas nacionais", "Investigadores internacionais", "Representantes de ONGs"],
    registration: "Inscrições abertas até 10 de Abril de 2025"
  },
  "workshop-sig": {
    title: "Workshop SIG aplicado à Conservação",
    date: "11 Maio 2025",
    location: "Laboratório de Cartografia CEBEA",
    category: "Formação",
    description: "Capacitação intensiva em análise espacial, com demonstrações práticas de projetos em curso.",
    fullDescription: "Este workshop oferece formação prática em Sistemas de Informação Geográfica (SIG) aplicados à conservação da biodiversidade. Os participantes terão oportunidade de trabalhar com dados reais de projetos do CEBEA e aprender técnicas avançadas de análise espacial.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    schedule: [
      { day: "Manhã", activities: ["Introdução ao SIG para conservação", "Fundamentos de análise espacial"] },
      { day: "Tarde", activities: ["Demonstrações práticas", "Análise de casos de estudo"] }
    ],
    speakers: ["Especialistas em SIG", "Investigadores do CEBEA"],
    registration: "Inscrições limitadas a 20 participantes. Prazo: 1 de Maio de 2025"
  },
  "mesa-redonda-clima": {
    title: "Mesa Redonda: Resiliência Climática em Angola",
    date: "30 Junho 2025",
    location: "Centro Cultural do Lubango",
    category: "Debate",
    description: "Painel com especialistas sobre estratégias de adaptação climática e partilha de resultados de investigação.",
    fullDescription: "Esta mesa-redonda reúne especialistas em mudanças climáticas e conservação para debater estratégias de adaptação climática em Angola. O evento oferece uma plataforma para partilha de conhecimento e discussão de soluções práticas para os desafios climáticos.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80",
    schedule: [
      { day: "Evento", activities: ["Abertura", "Painel de debate", "Sessão de perguntas", "Encerramento"] }
    ],
    speakers: ["Climatologistas", "Conservacionistas", "Representantes governamentais"],
    registration: "Entrada livre. Confirmação recomendada até 25 de Junho de 2025"
  }
};

export default function EventoDetalhes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const evento = eventosData[slug];

  if (!evento) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={evento.image}
            alt={evento.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link href="/pages/noticias">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Eventos
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <Tag className="w-4 h-4 text-[#14E259]" />
              <span className="text-sm font-medium text-[#14E259]">{evento.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {evento.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#14E259]" />
                <span>{evento.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#14E259]" />
                <span>{evento.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-xl text-[#002059] leading-relaxed font-medium">
                  {evento.description}
                </p>

                <p className="text-lg text-[#002059] leading-relaxed">
                  {evento.fullDescription}
                </p>

                {evento.schedule && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#002059] mb-4 flex items-center gap-3">
                      <Clock className="h-6 w-6 text-[#14E259]" />
                      Programa
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-6"></div>
                    <div className="space-y-4">
                      {evento.schedule.map((scheduleItem: any, index: number) => (
                        <Card key={index} className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 bg-white">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                          <CardContent className="p-6">
                            <h3 className="font-heading text-lg font-semibold text-[#14E259] mb-3">
                              {scheduleItem.day}
                            </h3>
                            <ul className="space-y-2">
                              {scheduleItem.activities.map((activity: string, actIndex: number) => (
                                <li key={actIndex} className="flex gap-3 items-start text-[#002059]">
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#14E259]"></span>
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 bg-white sticky top-24">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      Informações do Evento
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#129DE4]" />
                          Data
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {evento.date}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-1 flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#129DE4]" />
                          Localização
                        </p>
                        <p className="text-sm font-medium text-[#002059]">
                          {evento.location}
                        </p>
                      </div>

                      {evento.speakers && (
                        <div>
                          <p className="text-xs font-semibold uppercase text-[#002059]/70 mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4 text-[#129DE4]" />
                            Oradores
                          </p>
                          <div className="space-y-2">
                            {evento.speakers.map((speaker: string, index: number) => (
                              <div key={index} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#14E259]"></span>
                                <span className="text-sm text-[#002059]">{speaker}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {evento.registration && (
                      <div className="pt-4 border-t border-[#129DE4]/20">
                        <p className="text-sm text-[#002059] mb-4">{evento.registration}</p>
                        <Button className="w-full bg-[#14E259] hover:bg-[#12c94e] text-white">
                          <Megaphone className="mr-2 h-4 w-4" />
                          Inscrever-se
                        </Button>
                      </div>
                    )}
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
