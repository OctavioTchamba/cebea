import { Award, BookOpen, Target, Users } from "lucide-react"
import {Card, CardContent} from "./ui/card"

export default function About(){
    return(
       
      <section id="about" className="section-padding bg-background">
        
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Sobre o <span className="gradient-text">CEBEA</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Centro de Estudos de Biodiversidade e Educação Ambiental (CEBEA) é uma instituição de pesquisa líder comprometida com o entendimento e preservação do patrimônio natural do nosso planeta. Através de rigorosa pesquisa científica, programas educacionais inovadores e engajamento comunitário, trabalhamos para criar um futuro sustentável para todos.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fundado nos princípios da excelência científica e gestão ambiental, o CEBEA reúne pesquisadores, educadores e conservacionistas para abordar os desafios ambientais mais urgentes do nosso tempo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            <Card className="hover-lift bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Investigação Científica</h3>
                <p className="text-sm text-muted-foreground">
                  Realizando pesquisas de ponta em biodiversidade e ecologia
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Educação Ambiental</h3>
                <p className="text-sm text-muted-foreground">
                  Capacitando comunidades através da educação ambiental
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Biodiversidade e Conservação</h3>
                <p className="text-sm text-muted-foreground">
                  Protegendo ecossistemas e espécies ameaçadas
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-lift bg-card shadow-soft">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Sustentabilidade</h3>
                <p className="text-sm text-muted-foreground">
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