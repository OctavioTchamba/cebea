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
            <h2 className=" md:text-4xl font-bold text-xl mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça os pesquisadores e educadores que fazem a diferença na conservação ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.id}
                className="bg-muted border-2  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 bg-linear-to-br from-green-400 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black/20">
                   <User2Icon className="w-23 h-23 rounded-full bg-primary/50 ml-auto mt-15 mx-auto"/>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-muted text px-3 py-1 rounded-full text-sm font-heading font-semibold">
                      {member.specialization}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-heading mb-1">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {member.position}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground leading-relaxed mb-3">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {member.education}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  <div className="flex space-x-2">
                    <Link 
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-center text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4 mx-auto" />
                    </Link>
                    <Link 
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-center text-sm transition-colors"
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
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
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
