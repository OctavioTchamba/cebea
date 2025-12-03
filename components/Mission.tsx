import { ArrowRight, FlaskConical, GraduationCap,  Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export default function Missions(){
    return(
        <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Conectamos a pesquisa científica à ação ambiental, criando impacto duradouro através da
              educação, conservação e parcerias comunitárias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Excelência em Pesquisa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Realizando estudos inovadores em biodiversidade, ecologia e ciência da conservação para informar
                  políticas ambientais baseadas em evidências.
                </p>
                <Link href="/research" className="inline-flex items-center text-primary font-medium hover:underline">
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Educação Ambiental</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Capacitando a próxima geração através de programas educacionais inovadores que promovem a
                  gestão ambiental e a alfabetização científica.
                </p>
                <Link href="/education" className="inline-flex items-center text-primary font-medium hover:underline">
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">Engajamento Comunitário</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construindo parcerias com comunidades locais, organizações e partes interessadas para criar
                  soluções de conservação sustentáveis.
                </p>
                <Link href="/areas" className="inline-flex items-center text-primary font-medium hover:underline">
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    )
}