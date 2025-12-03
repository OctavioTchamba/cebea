import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function RecentNews() {
  const news = [
    {
      id: 1,
      title: "Nova Espécie de Borboleta Descoberta na Mata Atlântica",
      excerpt: "Pesquisadores do CEBEA identificaram uma nova espécie de borboleta endêmica em fragmentos florestais de São Paulo.",
      image: "/news-1.jpg",
      author: "Dr. Maria Silva",
      date: "15 de Janeiro, 2024",
      category: "Pesquisa",
      readTime: "3 min de leitura"
    },
    {
      id: 2,
      title: "Programa de Educação Ambiental Atende 500 Crianças",
      excerpt: "Iniciativa do CEBEA promove conscientização ambiental em escolas da região metropolitana.",
      image: "/news-2.jpg",
      author: "Prof. João Santos",
      date: "12 de Janeiro, 2024",
      category: "Educação",
      readTime: "2 min de leitura"
    },
    {
      id: 3,
      title: "Parceria com ONG Internacional Fortalece Conservação",
      excerpt: "CEBEA firma acordo de cooperação para projetos de conservação marinha no litoral brasileiro.",
      image: "/news-3.jpg",
      author: "Dra. Ana Costa",
      date: "10 de Janeiro, 2024",
      category: "Parcerias",
      readTime: "4 min de leitura"
    },
    {
      id: 4,
      title: "Workshop de Biodiversidade Reúne 200 Participantes",
      excerpt: "Evento promovido pelo CEBEA discute estratégias de conservação e pesquisa em biodiversidade.",
      image: "/news-4.jpg",
      author: "Dr. Carlos Lima",
      date: "8 de Janeiro, 2024",
      category: "Eventos",
      readTime: "3 min de leitura"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pesquisa":
        return "bg-green-100 text-green-800";
      case "Educação":
        return "bg-blue-100 text-blue-800";
      case "Parcerias":
        return "bg-purple-100 text-purple-800";
      case "Eventos":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              Últimas Notícias
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acompanhe as novidades, descobertas e eventos do CEBEA
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {news.map((article, index) => (
              <div 
                key={article.id}
                className={`bg-muted/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'md:flex' : ''}`}>
                  <div className={`${index === 0 ? 'md:w-1/2' : 'h-48'} bg-gradient-to-br from-green-400 to-blue-500 relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full  text-xs font-semibold ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${index === 0 ? 'md:w-1/2' : ''}`}>
                    <h3 className={`font-bold font-heading mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {article.title}
                    </h3>
                    <p className={`text-muted-foreground text-pretty leading-relaxed mb-4 ${index === 0 ? 'text-lg' : ''}`}>
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="group hover:bg-green-50 hover:border-green-300"
                    >
                      Ler Mais
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
              Ver Todas as Notícias
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
