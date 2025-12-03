'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Download,
  Filter,
  FileText,
  Layers,
  Tag,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PublicationType =
  | "Artigo científico"
  | "Guia técnico"
  | "Relatório técnico"
  | "Dissertação"
  | "Livro";

type Publication = {
  id: string;
  title: string;
  type: PublicationType;
  year: number;
  theme: string;
  authors: string;
  summary: string;
  downloadUrl: string;
};

const publications: Publication[] = [
  {
    id: "artigo-miombo-2025",
    title: "Dinâmica de Florestas Miombo na Região Sul de Angola",
    type: "Artigo científico",
    year: 2025,
    theme: "Ecologia e Florestas",
    authors: "Silva, M.; Chivela, J.; Morais, L.",
    summary:
      "Análise longitudinal de biomassa e diversidade em florestas Miombo, com implicações para políticas de conservação.",
    downloadUrl: "/docs/dinamica-miombo-2025.pdf",
  },
  {
    id: "relatorio-carbono-2024",
    title: "Relatório Técnico de Monitorização de Carbono em Chipindo",
    type: "Relatório técnico",
    year: 2024,
    theme: "Carbono e Clima",
    authors: "Equipa CEBEA",
    summary:
      "Resultados do programa de restauração e contabilização de carbono com metodologias participativas.",
    downloadUrl: "/docs/monitorizacao-carbono-2024.pdf",
  },
  {
    id: "guia-botanic-2023",
    title: "Guia Prático para Inventários Florísticos Comunitários",
    type: "Guia técnico",
    year: 2023,
    theme: "Botânica e Herbário",
    authors: "Mussungo, L.; Pereira, R.",
    summary:
      "Metodologias passo-a-passo para equipas comunitárias conduzirem inventários florísticos com apoio do Herbário LUBA.",
    downloadUrl: "/docs/guia-inventarios-floristicos.pdf",
  },
  {
    id: "dissertacao-educacao-2024",
    title:
      "Educação Ambiental como Ferramenta de Conservação em Comunidades Rurais",
    type: "Dissertação",
    year: 2024,
    theme: "Educação Ambiental",
    authors: "Tchissola, A.",
    summary:
      "Estudo de caso em três municípios do sul de Angola avaliando impacto de programas educativos.",
    downloadUrl: "/docs/dissertacao-educacao-ambiental.pdf",
  },
  {
    id: "livro-biodiversidade-2022",
    title: "Biodiversidade do Parque da Bicuar: Atlas Ilustrado",
    type: "Livro",
    year: 2022,
    theme: "Biodiversidade",
    authors: "CEBEA & Parceiros internacionais",
    summary:
      "Publicação ilustrada com inventários de fauna e flora, mapas temáticos e recomendações de gestão.",
    downloadUrl: "/docs/atlas-bicuar.pdf",
  },
  {
    id: "artigo-anfibios-2023",
    title: "Diversidade de Anfíbios nas Paisagens Agro-florestais da Huíla",
    type: "Artigo científico",
    year: 2023,
    theme: "Zoologia",
    authors: "Ferreira, P.; Gonçalves, B.; et al.",
    summary:
      "Investigação sobre a resiliência de anfíbios frente a alterações de uso do solo em mosaicos agro-florestais.",
    downloadUrl: "/docs/anfibios-huila.pdf",
  },
];

const typeFilters: (PublicationType | "Todos")[] = [
  "Todos",
  "Artigo científico",
  "Guia técnico",
  "Relatório técnico",
  "Dissertação",
  "Livro",
];

const themeFilters = [
  "Todos",
  "Biodiversidade",
  "Ecologia e Florestas",
  "Carbono e Clima",
  "Botânica e Herbário",
  "Zoologia",
  "Educação Ambiental",
];

export default function PublicacoesPage() {
  const [selectedType, setSelectedType] = useState<(typeof typeFilters)[number]>(
    "Todos"
  );
  const [selectedTheme, setSelectedTheme] = useState<(typeof themeFilters)[number]>(
    "Todos"
  );

  const years = useMemo(() => {
    const distinctYears = Array.from(new Set(publications.map((p) => p.year)));
    return ["Todos", ...distinctYears.sort((a, b) => b - a)];
  }, []);

  const [selectedYear, setSelectedYear] = useState<(number | "Todos")>(
    years[0] as number | "Todos"
  );

  const filteredPublications = publications.filter((publication) => {
    const typeMatch =
      selectedType === "Todos" || publication.type === selectedType;
    const themeMatch =
      selectedTheme === "Todos" || publication.theme === selectedTheme;
    const yearMatch =
      selectedYear === "Todos" || publication.year === selectedYear;
    return typeMatch && themeMatch && yearMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20" style={{ backgroundImage: `url(/imagem5.jpg)` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-4 text-white">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
            Publicações
          </h1>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            A produção científica e técnica do CEBEA disponível para consulta e
            download. Explore artigos, relatórios, guias e dissertações com o
            apoio do nosso CMS.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 rounded-2xl border border-primary/15 bg-muted/30 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 text-sm font-medium text-primary">
                <Filter className="h-4 w-4" />
                Filtrar publicações
              </span>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Tipo
                </p>
                <div className="flex flex-wrap gap-2">
                  {typeFilters.map((type) => (
                    <Button
                      key={type}
                      variant={type === selectedType ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Tema
                </p>
                <div className="flex flex-wrap gap-2">
                  {themeFilters.map((theme) => (
                    <Button
                      key={theme}
                      variant={theme === selectedTheme ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTheme(theme)}
                    >
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Ano
                </p>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <Button
                      key={year}
                      variant={year === selectedYear ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedYear(year as number | "Todos")}
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary/80">
                {filteredPublications.length} publicações encontradas
              </p>
              <p className="text-sm text-muted-foreground">
                Resultados atualizados via CMS interno (integração simulada).
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/cms/publicacoes">Gerir no CMS</Link>
            </Button>
          </div>

            <div className="grid gap-6 md:grid-cols-2">
              {filteredPublications.map((publication) => (
                <Card
                  key={publication.id}
                  className="border-2 border-primary/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {publication.type === "Artigo científico" ? (
                          <FileText className="h-6 w-6 text-primary" />
                        ) : publication.type === "Livro" ? (
                          <BookOpen className="h-6 w-6 text-primary" />
                        ) : (
                          <Layers className="h-6 w-6 text-primary" />
                        )}
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-heading text-xl font-semibold">
                            {publication.title}
                          </h3>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
                            {publication.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {publication.summary}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {publication.year}
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        {publication.authors}
                      </span>
                      <span className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-primary" />
                        {publication.theme}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-primary/10 bg-muted/30 px-6 py-4">
                    <div className="flex w-full items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Disponível para download imediato
                      </span>
                      <Button asChild size="sm">
                        <Link href={publication.downloadUrl} download>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
