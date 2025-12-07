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
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Selecione uma área para explorar
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore descrições completas, atividades em curso, imagens e
              iniciativas relacionadas a cada área estratégica do Centro.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {areasDeAtuacao.map((area, index) => {
              const Icon =
                iconMap[area.icon as keyof typeof iconMap] ?? TreePine;
              
              // Imagens do Unsplash baseadas no tipo de área
              const areaImages = [
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', // Natureza/Biodiversidade
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', // Educação
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', // Floresta
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', // Sustentabilidade
                'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop', // Botânica
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop', // Zoologia
              ];
              const imageUrl = areaImages[index % areaImages.length];

              return (
                <Card
                  key={area.slug}
                  className="relative flex h-full flex-col border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: `url(${imageUrl})`}}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  <CardContent className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-center gap-4 -mt-8 relative z-10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#129DE4]/10 backdrop-blur-sm bg-white/90">
                        <Icon className="h-6 w-6 text-[#129DE4]" />
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-[#002059]">{area.summary}</p>
                    <ul className="space-y-2 text-sm text-[#002059]">
                      {area.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#14E259]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t border-[#129DE4]/10 bg-muted/30 px-6 py-4">
                    <Link
                      href={`/pages/areas/${area.slug}`}
                      className="flex items-center gap-2 text-sm font-semibold text-[#129DE4] transition-colors hover:text-[#0d8bc7]"
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