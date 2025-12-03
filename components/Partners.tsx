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
    <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Parceiros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos em conjunto com instituições renomadas para promover a conservação e educação ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="h-20 w-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(partner.type)}`}>
                    {partner.type}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm text-center mb-4">
                  {partner.description}
                </p>
                
                <div className="text-center">
                  <Link 
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Visitar Site
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              Seja Nosso Parceiro
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

