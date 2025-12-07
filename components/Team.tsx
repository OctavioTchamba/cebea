import { ArrowRight, Mail, Linkedin, GraduationCap, User2Icon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-xl mb-4 text-[#002059]">
              Nossa Equipe
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça os pesquisadores e educadores que fazem a diferença na conservação ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.id}
                className="relative bg-white border-2 border-transparent hover:border-[#14E259]/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259] z-10"></div>
                <div className="h-64 bg-gradient-to-br from-[#129DE4] to-[#14E259] relative">
                  <div className="absolute inset-0 bg-black/20">
                   <User2Icon className="w-23 h-23 rounded-full bg-white/50 ml-auto mt-15 mx-auto"/>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/90 text-[#002059] px-3 py-1 rounded-full text-sm font-heading font-semibold">
                      {member.specialization}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-heading mb-1 text-[#14E259]">
                    {member.name}
                  </h3>
                  <p className="text-[#129DE4] font-semibold mb-2">
                    {member.position}
                  </p>
                  
                  <div className="flex items-center text-sm text-[#002059]/70 leading-relaxed mb-3">
                    <GraduationCap className="w-4 h-4 mr-2 text-[#129DE4]" />
                    {member.education}
                  </div>
                  
                  <p className="text-[#002059] text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Link 
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-[#002059]/10 hover:bg-[#002059]/20 text-[#002059] px-3 py-2 rounded-lg text-center text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4 mx-auto" />
                    </Link>
                    <Link 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="flex-1 bg-[#129DE4]/10 hover:bg-[#129DE4]/20 text-[#129DE4] px-3 py-2 rounded-lg text-center text-sm transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mx-auto" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-[#129DE4] hover:bg-[#0d8bc7] text-white px-8 py-3"
            >
              Conheça Toda Nossa Equipe
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
