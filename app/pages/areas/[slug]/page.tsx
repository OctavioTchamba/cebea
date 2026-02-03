import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Flower,
  GraduationCap,
  Map,
  PawPrint,
  TreePine,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { areasDeAtuacao } from "../data";

const iconMap = {
  PawPrint,
  Flower,
  Map,
  TreePine,
  GraduationCap,
} as const;

type AreaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AreaDetalhePage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = areasDeAtuacao.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  const Icon =
    iconMap[area.icon as keyof typeof iconMap] ?? TreePine;

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20"
        style={{ backgroundImage: `url(${area.image})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-6 text-white">
          <div className="flex justify-between gap-4 mt-6">
            <Button asChild variant="secondary" className=" bg-[#14E259]/50 text-white hover:bg-white/20">
              <Link href="/pages/areas" className="flex items-center gap-2 text-sm font-semibold">
                <ArrowLeft className="h-4 w-4" />
                Todas as áreas
              </Link>
            </Button>
            <span className="hidden items-center gap-2 rounded-full bg-[#14E259]/50 px-4 py-2 text-sm font-medium md:flex">
              <Icon className="h-4 w-4" />
              {area.title}
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold md:text-5xl lg:text-6xl">
            {area.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            {area.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {area.highlights.slice(0, 2).map((highlight) => (
              <span
                key={highlight}
                className="rounded-full bg-[#14E259]/50 px-4 py-2 text-sm font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                O que fazemos nesta área
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {area.description}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {area.highlights.map((highlight) => (
                  <Card
                    key={highlight}
                    className="border-2 border-primary/15 bg-muted/40"
                  >
                    <CardContent className="flex items-start gap-3 p-5 text-sm text-muted-foreground">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="border-2 border-accent/20 bg-muted/30">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <h3 className="font-heading text-xl font-semibold">
                  Quer colaborar nesta área?
                </h3>
                <p className="text-muted-foreground">
                  Procuramos parceiros, alunos e investigadores para expandir o impacto das nossas ações.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    Programação anual com ações trimestrais
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    Equipa multidisciplinar dedicada
                  </span>
                </div>
                <Button asChild className="mt-auto">
                  <Link href={`/pages/contatos?area=${area.slug}`}>
                    Falar com a equipa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 space-y-3">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Atividades Relacionadas
            </h2>
            <p className="text-muted-foreground">
              Exemplos de ações estruturantes desenvolvidas pela equipa.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {area.activities.map((activity) => (
              <Card
                key={activity}
                className="border-2 border-secondary/20 bg-background"
              >
                <CardContent className="flex items-start gap-3 p-5 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  <span>{activity}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 space-y-3">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground">
              Iniciativas recentes que ilustram o impacto desta área de atuação.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {area.featuredProjects.map((project) => (
              <Card
                key={project.name}
                className="border-2 border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold">
                      {project.name}
                    </h3>
                    <span className="text-sm font-medium text-primary">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

