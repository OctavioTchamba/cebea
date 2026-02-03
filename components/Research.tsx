"use client"

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { researchLines } from "@/data/researchLines";

const Research = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-card/50 to-background" />
      
      <div className="container-scientific relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
            Linhas de Investigação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Áreas de
            <span className="text-[#14E259] block">Excelência Científica</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O CEBEA rege-se pelos princípios da proteção do património biológico regional e nacional, 
            da educação para o desenvolvimento sustentável e preservação do meio ambiente.
          </p>
        </motion.div>

        {/* Research Lines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchLines.map((line, index) => (
            <motion.article
              key={line.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(line.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="glass-card border border-slate-200  p-8 h-full flex flex-col hover:shadow-[#14E259]/45 hover-lift cursor-pointer">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#14E259]/40 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <line.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {/* Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredId === line.id ? 0.5 : 0,
                      scale: hoveredId === line.id ? 1.2 : 0.8 
                    }}
                    className="absolute inset-0 bg-[#14E259] rounded-2xl blur-xl"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {line.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
                  {line.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">
                    {line.projects} projetos ativos
                  </span>
                  <motion.div
                    animate={{ x: hoveredId === line.id ? 4 : 0 }}
                    className="flex items-center gap-1 text-primary text-sm font-medium"
                  >
                    Explorar
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}  
         
        </div>
      
      </div> 
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Link href="/pages/pesquisas">
           <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-white border border-[#14E259]/30 hover:bg-[#14E259] hover:border-[#14E259] transition-all">
            Ver Todas as Pesquisas
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          </Link>
      </motion.div>
    </section>
  );
};

export default Research;
