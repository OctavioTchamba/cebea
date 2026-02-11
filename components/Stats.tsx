import { Users, BookOpen, TreePine, Award } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <TreePine className="w-8 h-8 text-green-600" />,
      number: "150+",
      label: "Espécies Estudadas",
      description: "Biodiversidade pesquisada"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      number: "2.500+",
      label: "Estudantes Atendidos",
      description: "Programas educacionais",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      number: "50+",
      label: "Projetos Realizados",
      description: "Pesquisas e conservação",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      number: "25+",
      label: "Publicações Científicas",
      description: "Artigos e relatórios",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      number: "25+",
      label: "Investigadores",
      description: "Artigos e relatórios",
    }
  ];

  return (
    <section className="py-20 bg-linear-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Números de Impacto
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resultados que demonstram nosso compromisso com a pesquisa, educação e conservação ambiental
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

