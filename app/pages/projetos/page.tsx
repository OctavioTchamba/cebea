"use client"
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { projects } from "@/data/projects";


const projectCategories = ["Todos", "Em Curso", "Concluídos", "Internacionais"];


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
                    ? "bg-[#14E259] text-white shadow-lg shadow-[#14E259]/30"
                    : "bg-muted text-muted-foreground hover:bg-[#14E259]/10 hover:text-[#14E259] hover:border border-[#14E259]/30"
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
                <div className="absolute inset-0 bg-linear-to-t from-[#14E259]/80 via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
                  <span className="text-xs font-medium text-[#14E259]">{project.category}</span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-[#14E259] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-2">
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
                <Link href={`/pages/projetos/${project.slug}`}>
                  <Button variant="outline" size="sm" className="group/btn border-[#14E259]/30 hover:bg-[#14E259] hover:text-white hover:border-[#14E259] transition-all">
                    Explorar Projeto
                    <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>

              </div>
            </motion.article>
          ))}
        </div>

        {/* View All <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/pages/projetos">
           <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-white border border-[#14E259]/30 hover:bg-[#14E259] hover:border-[#14E259] transition-all">
            Ver Todos os Projetos
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          </Link>
         
        </motion.div> */}

      </div>
    </section>
  );
};

export default Projects;
