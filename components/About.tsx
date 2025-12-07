import { Award, BookOpen, Target, Users } from "lucide-react"
import {Card, CardContent} from "./ui/card"

export default function About(){
    return(
       
      <section id="about" className="section-padding bg-background">
        
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-[#002059] font-heading text-4xl md:text-5xl font-bold mb-6">
              Sobre o <span className="text-[#002059] gradient-text">CEBEA</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mb-8"></div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Centro de Estudos de Biodiversidade e Educação Ambiental (CEBEA) é uma instituição de pesquisa líder comprometida com o entendimento e preservação do patrimônio natural do nosso planeta. Através de rigorosa pesquisa científica, programas educacionais inovadores e engajamento comunitário, trabalhamos para criar um futuro sustentável para todos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundado nos princípios da excelência científica e gestão ambiental, o CEBEA reúne pesquisadores, educadores e conservacionistas para abordar os desafios ambientais mais urgentes do nosso tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            <Card className="relative hover-lift bg-card shadow-soft border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#129DE4]/10 flex items-center justify-center mb-4 -mt-8 relative z-10">
                  <Target className="w-6 h-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#14E259]">Investigação Científica</h3>
                <p className="text-sm text-[#002059]">
                  Realizando pesquisas de ponta em biodiversidade e ecologia
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative hover-lift bg-card shadow-soft border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#14E259]/10 flex items-center justify-center mb-4 -mt-8 relative z-10">
                  <BookOpen className="w-6 h-6 text-[#14E259]" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#14E259]">Educação Ambiental</h3>
                <p className="text-sm text-[#002059]">
                  Capacitando comunidades através da educação ambiental
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative hover-lift bg-card shadow-soft border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#129DE4]/10 flex items-center justify-center mb-4 -mt-8 relative z-10">
                  <Users className="w-6 h-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#14E259]">Biodiversidade e Conservação</h3>
                <p className="text-sm text-[#002059]">
                  Protegendo ecossistemas e espécies ameaçadas
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative hover-lift bg-card shadow-soft border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-32 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop)`}}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#14E259]/10 flex items-center justify-center mb-4 -mt-8 relative z-10">
                  <Award className="w-6 h-6 text-[#14E259]" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#14E259]">Sustentabilidade</h3>
                <p className="text-sm text-[#002059]">
                  Promovendo práticas sustentáveis para futuras gerações
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    )
}