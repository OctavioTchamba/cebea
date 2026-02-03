

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Calendar, ArrowUpRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const publications = [
  {
    type: "Artigo",
    title: "Climate-driven shifts in endemic species distribution across Iberian mountain ecosystems",
    journal: "Nature Climate Change",
    date: "Dezembro 2024",
    authors: ["Silva, M.", "Fernandes, J.", "et al."],
    impactFactor: "28.7",
  },
  {
    type: "Artigo",
    title: "eDNA metabarcoding reveals hidden diversity in Atlantic seamount communities",
    journal: "Science Advances",
    date: "Novembro 2024",
    authors: ["Costa, A.", "Pereira, L."],
    impactFactor: "14.1",
  },
  {
    type: "Artigo",
    title: "Pollinator networks under agricultural intensification: a 20-year synthesis",
    journal: "Ecology Letters",
    date: "Outubro 2024",
    authors: ["Martins, R.", "Santos, P.", "et al."],
    impactFactor: "9.8",
  },
];

const news = [
  {
    type: "Notícia",
    title: "Centro recebe financiamento europeu de 2.5M€ para projeto de conservação marinha",
    date: "10 Jan 2025",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&q=80",
  },
  {
    type: "Evento",
    title: "Conferência Internacional de Biodiversidade 2025 — Inscrições abertas",
    date: "15 Jan 2025",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
  },
  {
    type: "Notícia",
    title: "Nova espécie de orquídea descoberta na Serra da Estrela por equipa do centro",
    date: "5 Jan 2025",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&q=80",
  },
];

const Publications = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding relative bg-card/30">
      <div className="container-scientific">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
            Publicações & Notícias
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Conhecimento que
            <span className="text-[#14E259] block">inspira ação</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Publications - Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <FileText className="w-5 h-5 text-[#14E259]" />
              <h3 className="font-display text-xl font-semibold">Publicações Recentes</h3>
            </motion.div>

            {publications.map((pub, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 card-hover group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-md bg-[#14E259]/10 text-[#14E259] text-xs font-medium">
                        {pub.type}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {pub.date}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-medium mb-2 group-hover:text-[#14E259] transition-colors line-clamp-2">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors.join(", ")}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-foreground/80">{pub.journal}</span>
                      <span className="text-[#14E259] font-medium">IF: {pub.impactFactor}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#14E259] transition-colors shrink-0" />
                </div>
              </motion.article>
            ))}

            <Button variant="outline" className="w-full border-[#14E259]/30 text-[#14E259] hover:bg-[#14E259] hover:text-white hover:border-[#14E259]">
              Ver Todas as Publicações
            </Button>
          </div>

          {/* News - Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <Newspaper className="w-5 h-5 text-[#14E259]" />
              <h3 className="font-display text-xl font-semibold">Notícias & Eventos</h3>
            </motion.div>

            {news.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card overflow-hidden card-hover group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 rounded-md bg-[#129DE4]/20 text-[#129DE4] text-xs font-medium">
                      {item.type}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h4 className="font-display text-base font-medium group-hover:text-[#14E259] transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </motion.article>
            ))}

            <Button variant="outline" className="w-full border-[#14E259]/30 text-[#14E259] hover:bg-[#14E259] hover:text-white hover:border-[#14E259]">
              Ver Mais Notícias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
