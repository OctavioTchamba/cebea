"use client"
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  ClipboardList,
  Clock,
  Compass,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
  Users2,
  BookOpen, Award,
} from "lucide-react";
import Image from "next/image";


const programs = [
  {
    icon: BookOpen,
    title: "Programas de Mestrado",
    description: "Formação avançada em Biodiversidade, Ecologia e Conservação com componente prática intensiva.",
    cta: "Candidaturas Abertas",
    highlight: true,
  },
  {
    icon: Award,
    title: "Doutoramento",
    description: "Investigação de fronteira com supervisão de especialistas reconhecidos internacionalmente.",
    cta: "Saber Mais",
    highlight: false,
  },
  {
    icon: Users2,
    title: "Cursos de Verão",
    description: "Programas intensivos de campo e laboratório para estudantes e profissionais.",
    cta: "Ver Próximos Cursos",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Workshops & Seminários",
    description: "Eventos regulares com investigadores convidados e apresentação de resultados.",
    cta: "Calendário",
    highlight: false,
  },
];
export default function EducacaoPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-20 pt-32 md:pt-16"
        style={{ backgroundImage: `url(/imagem6.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Educação e Formação
            <span className="block text-white">
              Competências para a sustentabilidade
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
            Cursos, ações educativas e programas permanentes que capacitam
            agentes de conservação e educação ambiental em Angola.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              ISCED-Huíla e territórios parceiros
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Formação aplicada e certificada
            </span>
              </div>
            </div>
        </section>

        <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-earth/5 to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-scientific relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Educação & Formação
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Formamos os
              <span className="text-gradient block">cientistas do futuro</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              O nosso compromisso com a educação vai além da sala de aula. 
              Oferecemos experiências transformadoras que combinam teoria, 
              prática de campo e investigação de ponta.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Alunos formados</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">15</div>
                <div className="text-sm text-muted-foreground">Cursos ativos</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Taxa de emprego</div>
              </div>
            </div>

            <Button size="lg" variant="hero">
              Explorar Programas
            </Button>
          </motion.div>

          {/* Right - Programs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`glass-card p-6 card-hover group ${
                  program.highlight ? 'ring-1 ring-primary/30' : ''
                }`}
              >
                {program.highlight && (
                  <div className="inline-flex items-center gap-1 px-2 py-1 mb-4 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    <Sparkles className="w-3 h-3" />
                    Destaque
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{program.description}</p>
                <button className="text-primary text-sm font-medium link-underline">
                  {program.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}
