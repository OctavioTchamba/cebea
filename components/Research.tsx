import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, Dna, TreeDeciduous, Droplets, Mountain, Bird, Bug } from "lucide-react";

const researchLines = [
  {
    id: 1,
    icon: Dna,
    title: "Genómica & Evolução",
    description: "Análise genética de populações e mecanismos evolutivos em ecossistemas tropicais e temperados.",
    projects: 12,
    status: "active",
  },
  {
    id: 2,
    icon: TreeDeciduous,
    title: "Ecologia Florestal",
    description: "Dinâmica de florestas, serviços ecossistémicos e adaptação às alterações climáticas.",
    projects: 8,
    status: "active",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Ecossistemas Aquáticos",
    description: "Biodiversidade marinha e dulçaquícola, conservação de habitats críticos.",
    projects: 15,
    status: "active",
  },
  {
    id: 4,
    icon: Mountain,
    title: "Biogeografia",
    description: "Padrões de distribuição de espécies e conectividade de paisagens.",
    projects: 6,
    status: "active",
  },
  {
    id: 5,
    icon: Bird,
    title: "Ornitologia",
    description: "Migração, comportamento e conservação de aves em ecossistemas ameaçados.",
    projects: 9,
    status: "active",
  },
  {
    id: 6,
    icon: Bug,
    title: "Entomologia Aplicada",
    description: "Polinizadores, controlo biológico e papel dos insetos nos ecossistemas.",
    projects: 7,
    status: "active",
  },
];

const Research = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
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
            Investigação multidisciplinar que abrange desde a escala molecular 
            até aos ecossistemas globais.
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
              <div className="glass-card p-8 h-full flex flex-col card-hover cursor-pointer">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <line.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {/* Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredId === line.id ? 0.5 : 0,
                      scale: hoveredId === line.id ? 1.2 : 0.8 
                    }}
                    className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {line.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
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
    </section>
  );
};

export default Research;
