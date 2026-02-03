import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Partners() {
  const partners = [
    {
      id: 1,
      name: "Universidade de São Paulo",
      type: "Universidade",
      logo: "/partner-usp.jpg",
      description: "Parceria em pesquisa e pós-graduação",
      website: "https://www.usp.br"
    },
    {
      id: 2,
      name: "Ministério do Meio Ambiente",
      type: "Governo",
      logo: "/partner-mma.jpg",
      description: "Apoio a projetos de conservação",
      website: "https://www.gov.br/mma"
    },
    {
      id: 3,
      name: "WWF Brasil",
      type: "ONG",
      logo: "/partner-wwf.jpg",
      description: "Conservação da biodiversidade",
      website: "https://www.wwf.org.br"
    },
    {
      id: 4,
      name: "Fundação Boticário",
      type: "Fundação",
      logo: "/partner-boticario.jpg",
      description: "Financiamento de pesquisas",
      website: "https://www.fundacaogrupoboticario.org.br"
    },
    {
      id: 5,
      name: "Instituto Chico Mendes",
      type: "Instituto",
      logo: "/partner-icmbio.jpg",
      description: "Gestão de unidades de conservação",
      website: "https://www.icmbio.gov.br"
    },
    {
      id: 6,
      name: "Conservation International",
      type: "ONG Internacional",
      logo: "/partner-ci.jpg",
      description: "Projetos de conservação global",
      website: "https://www.conservation.org"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Universidade":
        return "bg-blue-100 text-blue-800";
      case "Governo":
        return "bg-green-100 text-green-800";
      case "ONG":
        return "bg-purple-100 text-purple-800";
      case "Fundação":
        return "bg-orange-100 text-orange-800";
      case "Instituto":
        return "bg-red-100 text-red-800";
      case "ONG Internacional":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14E259]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#129DE4]/10 rounded-full blur-3xl" />
      
      <div className="container-scientific relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#14E259] text-sm font-medium uppercase tracking-widest mb-4 block">
            Parcerias Estratégicas
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trabalhamos com
            <span className="text-[#14E259] block">instituições de excelência</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Colaborações nacionais e internacionais que amplificam o impacto da nossa investigação e conservação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="glass-card p-6 card-hover group relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="text-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-[#14E259] to-[#129DE4] rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[#14E259] transition-colors">
                  {partner.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#14E259]/10 text-[#14E259] border border-[#14E259]/20">
                  {partner.type}
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm text-center mb-4">
                {partner.description}
              </p>
              
              <div className="text-center">
                <Link 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#14E259] hover:text-[#12c94e] text-sm font-medium transition-colors"
                >
                  Visitar Site
                  <ExternalLink className="ml-1 w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#14E259] hover:bg-[#12c94e] text-white px-8 py-6 text-lg"
          >
            Seja Nosso Parceiro
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

