import { Award, BookOpen, FlaskConical, Globe, GraduationCap, Leaf, Target, Users } from "lucide-react"
import {Card, CardContent} from "./ui/card"
import { motion } from "framer-motion"


const pillars = [
  {
    icon: FlaskConical,
    title: "Investigação",
    description: "Pesquisa de fronteira em ecologia, genética e conservação de espécies.",
  },
  {
    icon: Leaf,
    title: "Biodiversidade",
    description: "Protegendo ecossistemas e espécies ameaçadas",
  },
  {
    icon: Globe,
    title: "Impacto Global",
    description: "Projetos internacionais com parceiros de excelência.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Formação de nova geração de cientistas e líderes ambientais.",
  },
];
export default function About(){
    return(
       
      <section id="about" className="section-padding  bg-gradient-earth relative overflow-hidden">
          {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      
      <div className="container-scientific">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
            Sobre o Centro
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Onde a ciência encontra
            <span className="text-[#14E259] block">a vida</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
          O Centro de Estudos de Biodiversidade e Educação Ambiental (CEBEA) é uma instituição de pesquisa líder comprometida com o entendimento e preservação do patrimônio natural do nosso planeta. Através de rigorosa pesquisa científica, programas educacionais inovadores e engajamento comunitário, 
          trabalhamos para criar um futuro sustentável para todos.
          <br></br>
          {""}
          O CEBEA, pertence ao ISCED-Huíla é um centro vocacionado para o desenvolvimento de 
          investigação e da biodiversidade de Angola, com focos no Sudoeste. 
           Centro compreende um Herbário (LUBA) e um Museu de Zoologia, constituídos por coleções de amostras da biodiversidade tanto local, nacional e internacional. Possui por uma equipa bastante dinâmica,
           que congrega Investigadores de diferentes idades, géneros e áreas de formação.<br/>
           Fundado nos princípios da excelência científica e gestão ambiental, o CEBEA reúne pesquisadores, educadores e conservacionistas para abordar os desafios ambientais mais urgentes do nosso tempo.
          </p>
        </motion.div>
        </div>
        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 container-custom">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={ { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 card-hover border-2 hover-lift hover:border-[#14E259] transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-xl text-[#14E259]  shadow-soft hover-lift flex items-center justify-center border-2  mb-6 hover:border-[#14E259] transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <pillar.icon className="w-7 h-7 text-[#14E259]" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
         
        </div>
      </div>
    </section>
    )
}