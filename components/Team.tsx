"use client"

import { motion, useInView } from "framer-motion";
import { Linkedin, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Team() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const team = [
    {
      id: 1,
      name: "Dr. Jose Tchamba",
      position: "Diretor de Pesquisa",
      specialization: "Ecologia de Ecossistemas",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      education: "PhD em Biologia - USP",
      email: "maria.silva@cebea.org.br",
      linkedin: "maria-silva-cebea",
      bio: "Especialista em ecologia de ecossistemas tropicais com mais de 15 anos de experiência em pesquisa."
    },
    {
      id: 2,
      name: "Prof. Marina Rafael",
      position: "Diretora Financeira",
      specialization: "Educação Ambiental",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      education: "MSc em Educação - UNICAMP",
      email: "joao.santos@cebea.org.br",
      linkedin: "joao-santos-educacao",
      bio: "Dedica-se ao desenvolvimento de metodologias inovadoras em educação ambiental."
    },
    {
      id: 3,
      name: "António Chissingui",
      position: "Scientific Adviser",
      specialization: "Conservação da Biodiversidade",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      education: "PhD em Conservação - UFRJ",
      email: "ana.costa@cebea.org.br",
      linkedin: "ana-costa-conservacao",
      bio: "Lidera projetos de conservação de espécies ameaçadas e restauração ecológica."
    },
    {
      id: 4,
      name: "Manuel Cachissapa",
      position: "Patrimonio",
      specialization: "Biodiversidade Aquática",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      education: "PhD em Zoologia - UFMG",
      email: "carlos.lima@cebea.org.br",
      linkedin: "carlos-lima-biodiversidade",
      bio: "Especialista em ecossistemas aquáticos continentais e taxonomia de peixes."
    }
  ];

  const partners = [
    { name: "Universidade de Lisboa", country: "Portugal" },
    { name: "Max Planck Institute", country: "Alemanha" },
    { name: "CSIC", country: "Espanha" },
    { name: "Smithsonian", country: "EUA" },
    { name: "INPA", country: "Brasil" },
    { name: "CNRS", country: "França" },
  ];

  return (
<section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-charcoal/50 to-background" />
      
      <div className="container-scientific relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
            Equipa & Parcerias
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ciência feita por
            <span className="text-[#14E259] block">pessoas extraordinárias</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6">
            Uma equipa multidisciplinar e internacional dedicada à excelência científica.
          </p>
        </motion.div>

        {/* Team Grid - Asymmetric */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl card-hover ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 ? 'aspect-square' : 'aspect-3/4'} overflow-hidden`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
               
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#14E259] via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={`font-display font-semibold text-foreground ${index === 0 ? 'text-xl' : 'text-sm'}`}>
                  {member.name}
                </h3>
                <p className={`text-[#01501b] ${index === 0 ? 'text-sm' : 'text-xs'}`}>{member.position}</p>
                <p className={`text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${index === 0 ? 'text-sm mt-1' : 'text-xs mt-1'}`}>
                  {member.specialization}
                </p>
              </div>

              {/* Social Links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#14E259] hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-[#14E259] hover:text-white transition-colors">
                  <GraduationCap className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-8 md:p-12 bg-accent-foreground/20"
        >
          <h3 className="font-display text-xl font-semibold mb-8 text-center ">
            Parceiros Internacionais
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-[#14E259]/10 transition-colors">
                  <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-[#14E259] transition-colors">
                    {partner.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground/80">{partner.name}</p>
                <p className="text-xs text-muted-foreground">{partner.country}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
