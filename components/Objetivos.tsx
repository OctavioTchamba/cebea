import { FlaskConical, Link, ArrowRight, GraduationCap, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";


export default function Objetives(){
    return(
        <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance text-[#002059]">Objectivos</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Conectamos a pesquisa científica à ação ambiental, criando impacto duradouro através da
              educação, conservação e parcerias comunitárias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">Excelência em Pesquisa</h3>
                <p className="text-[#002059] leading-relaxed">
                  Realizando estudos inovadores em biodiversidade, ecologia e ciência da conservação para informar
                  políticas ambientais baseadas em evidências.
                </p>
                
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">Educação Ambiental</h3>
                <p className="text-[#002059] leading-relaxed">
                  Capacitando a próxima geração através de programas educacionais inovadores que promovem a
                  gestão ambiental e a alfabetização científica.
                </p>
               
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">Engajamento Comunitário</h3>
                <p className="text-[#002059] leading-relaxed">
                  Construindo parcerias com comunidades locais, organizações e partes interessadas para criar
                  soluções de conservação sustentáveis.
                </p>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
}