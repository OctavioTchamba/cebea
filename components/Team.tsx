"use client"

import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      id: 1,
      name: "Dr. Jose Tchamba",
      position: "Diretor de Pesquisa",
      specialization: "Ecologia de Ecossistemas",
      image: "/team-1.jpg",
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
      image: "/team-2.jpg",
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
      image: "/team-3.jpg",
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
      image: "/team-4.jpg",
      education: "PhD em Zoologia - UFMG",
      email: "carlos.lima@cebea.org.br",
      linkedin: "carlos-lima-biodiversidade",
      bio: "Especialista em ecossistemas aquáticos continentais e taxonomia de peixes."
    }
  ];

  return (
    <section className="py-20  bg-background">
      <div className="bg-muted-foreground"></div>
    <div className="container-custom">
      <motion.div 
      initial={{opacity:0, y: 40}}
      animate={{opacity: 1, y: 0}}
      transition={{ duration: 0.8}}
      className="text-center mt-5"
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
      {/**Team grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
  {team.map((team)=>(
      <motion.div
      key={team.id}
      initial={{opacity: 0, y:30}}
      animate={{opacity: 1, y:0}}
      transition={{ duration: 0.6, delay: team.id * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl card-hover ${
        team.id === 0 ? 'col-span-2 row-span-2' : ''
      }`}
      >
        <div className={`${team.id === 0 ? 'aspect-square' : 'aspect-3/4'} overflow-hidden`}>
          <img src={team.image} alt=""
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />


        </div>

        <div className="absolute bottom-0 left-0 right-0  p-4 bg-amber-400 group-hover:scale-3d">

        </div>

      </motion.div>
        ))}
      </div>
      


    </div>
          
    </section>
  );
}
