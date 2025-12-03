import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Globe2,
  MapPin,
  Megaphone,
  Newspaper,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const noticias = [
  {
    id: "parceria-museu-natural-2025",
    title: "Nova parceria com o Museu de História Natural de Angola",
    date: "05 Março 2025",
    category: "Parcerias",
    summary:
      "Acordo de cooperação técnica para intercâmbio de coleções, formação de curadores e projetos conjuntos de investigação.",
    link: "/noticias/parceria-museu",
  },
  {
    id: "descoberta-anfibio-2025",
    title: "Descoberto novo anfíbio endémico nas serras da Huíla",
    date: "21 Fevereiro 2025",
    category: "Descobertas",
    summary:
      "Equipa de Zoologia identifica espécie inédita de anfíbio através de missões de campo e análises genéticas.",
    link: "/noticias/anfibio-endemico",
  },
  {
    id: "cms-integrado-2024",
    title: "Lançamento do novo CMS do CEBEA",
    date: "15 Dezembro 2024",
    category: "Tecnologia",
    summary:
      "Plataforma centralizada que integra notícias, publicações, eventos e dados de investigação do centro.",
    link: "/noticias/lancamento-cms",
  },
];

const eventos = [
  {
    id: "forum-biodiversidade-2025",
    title: "Fórum Regional de Biodiversidade e Conservação",
    date: "18–20 Abril 2025",
    location: "ISCED-Huíla, Lubango",
    category: "Conferência",
    description:
      "Três dias de debates sobre conservação, apresentações científicas e oficinas práticas com parceiros nacionais e internacionais.",
    link: "/eventos/forum-biodiversidade",
  },
  {
    id: "workshop-sig-2025",
    title: "Workshop SIG aplicado à Conservação",
    date: "11 Maio 2025",
    location: "Laboratório de Cartografia CEBEA",
    category: "Formação",
    description:
      "Capacitação intensiva em análise espacial, com demonstrações práticas de projetos em curso.",
    link: "/eventos/workshop-sig",
  },
  {
    id: "mesa-redonda-clima-2025",
    title: "Mesa Redonda: Resiliência Climática em Angola",
    date: "30 Junho 2025",
    location: "Centro Cultural do Lubango",
    category: "Debate",
    description:
      "Painel com especialistas sobre estratégias de adaptação climática e partilha de resultados de investigação.",
    link: "/eventos/mesa-redonda-clima",
  },
];

export default function NoticiasEventosPage() {
  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20"
        style={{ backgroundImage: `url(/imagem4.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-4 text-white">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            Notícias e Eventos
          </h1>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            Atualizações do CEBEA: novas parcerias, descobertas científicas,
            iniciativas com a comunidade e agenda de eventos ligados ao CMS.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              <Newspaper className="h-4 w-4" />
              Atualizado semanalmente via CMS
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              <Globe2 className="h-4 w-4" />
              Cobertura regional e nacional
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Últimas notícias
              </h2>
              <p className="text-sm text-muted-foreground">
                Conteúdo sincronizado com a plataforma de gestão de conteúdos.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/cms/noticias">
                Ver todas no CMS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((noticia) => (
              <Card
                key={noticia.id}
                className="border-2 border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {noticia.category}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium uppercase text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      {noticia.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {noticia.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {noticia.summary}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-primary/10 bg-muted/30 px-6 py-4">
                  <Link
                    href={noticia.link}
                    className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Ler mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Eventos e workshops
              </h2>
              <p className="text-sm text-muted-foreground">
                Datas, locais e descrições das próximas atividades abertas ao
                público e parceiros.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/cms/eventos">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {eventos.map((evento) => (
              <Card
                key={evento.id}
                className="border-2 border-secondary/20 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                      {evento.category}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium uppercase text-muted-foreground">
                      <Calendar className="h-4 w-4 text-secondary" />
                      {evento.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold">
                    {evento.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {evento.description}
                  </p>
                  <span className="flex items-center gap-2 text-sm font-semibold text-secondary">
                    <MapPin className="h-4 w-4" />
                    {evento.location}
                  </span>
                </CardContent>
                <CardFooter className="border-t border-secondary/10 bg-background px-6 py-4">
                  <Link
                    href={evento.link}
                    className="flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
                  >
                    Detalhes e inscrição
                    <Megaphone className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
