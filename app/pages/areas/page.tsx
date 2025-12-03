import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Flower,
  GraduationCap,
  Map,
  PawPrint,
  TreePine,
  ArrowRight,
} from "lucide-react";
import { areasDeAtuacao } from "./data";

const iconMap = {
  PawPrint,
  Flower,
  Map,
  TreePine,
  GraduationCap,
} as const;

export default function Areas() {
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20"
        style={{ backgroundImage: `url(/imagem7.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="container relative z-10 mx-auto max-w-5xl text-center space-y-4">
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Áreas de Atuação
          </h1>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            Conheça as frentes prioritárias de trabalho do CEBEA. Cada área
            reúne equipas multidisciplinares, projetos de investigação e ações
            educativas que fortalecem a conservação da biodiversidade em Angola.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Selecione uma área para explorar
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore descrições completas, atividades em curso, imagens e
              iniciativas relacionadas a cada área estratégica do Centro.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {areasDeAtuacao.map((area) => {
              const Icon =
                iconMap[area.icon as keyof typeof iconMap] ?? TreePine;

              return (
                <Card
                  key={area.slug}
                  className="flex h-full flex-col border-2 border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <CardContent className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </span>
                      <h3 className="font-heading text-xl font-semibold">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground">{area.summary}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {area.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t border-primary/10 bg-muted/30 px-6 py-4">
                    <Link
                      href={`/pages/areas/${area.slug}`}
                      className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Explorar área
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}