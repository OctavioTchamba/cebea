import { Award, BookOpen, Leaf, TrendingUp } from "lucide-react";

export default function ImpactStats() {
  const stats = [
    {
      id: 1,
      number: "50+",
      label: "Projetos Realizados",
      description: "Iniciativas de pesquisa e conservação",
      icon: <Award className="h-8 w-8" />,
      color: "from-[#129DE4] to-[#0d8bc7]"
    },
    {
      id: 2,
      number: "500+",
      label: "Espécies Catalogadas",
      description: "Biodiversidade documentada e estudada",
      icon: <Leaf className="h-8 w-8" />,
      color: "from-[#14E259] to-[#11c04a]"
    },
    {
      id: 3,
      number: "120+",
      label: "Artigos Publicados",
      description: "Contribuições científicas reconhecidas",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-[#129DE4] to-[#14E259]"
    }
  ];

  return (
    <section className="py-20 bg-[#002059]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
              Nosso Impacto em Números
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Resultados concretos do nosso trabalho em pesquisa, conservação e educação ambiental
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#14E259]/30"
              >
                {/* Decorative gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="relative mb-2">
                  <span className="font-heading text-4xl md:text-5xl font-bold text-[#002059]">
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="relative font-heading text-xl font-semibold mb-2 text-[#14E259]">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-[#002059]/70 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#14E259] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

