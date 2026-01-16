import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projectCategories = ["Todos", "Em Curso", "Concluídos", "Internacionais"];

const projects = [
  {
    id: 1,
    title: "BioAtlas Ibérico",
    description: "Mapeamento genético e ecológico da biodiversidade na Península Ibérica com técnicas de DNA ambiental.",
    category: "Em Curso",
    year: "2023-2026",
    partners: ["Univ. Lisboa", "CSIC Madrid", "FCT"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Rede AMAZONIA",
    description: "Monitorização de hotspots de biodiversidade na Amazónia através de sensores remotos e IA.",
    category: "Em Curso",
    year: "2022-2025",
    partners: ["INPA", "NASA", "ESA"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Corais do Atlântico",
    description: "Resiliência de recifes de coral face às alterações climáticas no Atlântico tropical.",
    category: "Em Curso",
    year: "2024-2027",
    partners: ["NOAA", "Univ. Açores"],
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Genoma Floresta Laurissilva",
    description: "Sequenciação completa do genoma das espécies endémicas da floresta Laurissilva da Madeira.",
    category: "Concluídos",
    year: "2020-2023",
    partners: ["Univ. Madeira", "EBI"],
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Migrações Transatlânticas",
    description: "Estudo de rotas migratórias de aves entre Europa e África com tecnologia GPS.",
    category: "Internacionais",
    year: "2021-2024",
    partners: ["BirdLife", "Max Planck"],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Insetos Polinizadores",
    description: "Impacto das práticas agrícolas na diversidade de polinizadores em Portugal.",
    category: "Concluídos",
    year: "2019-2022",
    partners: ["INIAV", "EU Horizon"],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&q=80",
    featured: false,
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section ref={sectionRef} className="section-padding relative bg-charcoal-deep">
      <div className="container-scientific">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
              Projetos Científicos
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Investigação
              <span className="text-[#14E259] block">em Ação</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl card-hover",
                project.featured && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Image */}
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <span className="text-xs font-medium text-primary">{project.category}</span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {project.partners.length} parceiros
                  </span>
                </div>

                {/* CTA */}
                <Button variant="outline" size="sm" className="group/btn">
                  Explorar Projeto
                  <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
            Ver Todos os Projetos
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
