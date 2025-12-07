import Link from "next/link";
import Research from "@/components/Research";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Leaf, TreePine, Recycle, Map, Globe2, GraduationCap, Award, Globe, MapPin } from "lucide-react";
import { url } from "inspector";

const linhas = [
  {
    id: "colecoes",
    title: "Coleções Científicas",
    description:
      "Curadoria e estudo de acervos botânicos e zoológicos para referência e pesquisa.",
    icon: <Layers className="h-4 w-4" />,
    href: "#projetos",
  },
  {
    id: "biodiversidade",
    title: "Biodiversidade",
    description:
      "Inventários, monitorização e modelação da diversidade biológica angolana.",
    icon: <Leaf className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
  {
    id: "florestas",
    title: "Florestas",
    description:
      "Dinâmica florestal, serviços ecossistémicos e conservação de habitats.",
    icon: <TreePine className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
  {
    id: "reflorestamento",
    title: "Reflorestamento e Recuperação Ambiental",
    description:
      "Restauração ecológica, carbono e recuperação de áreas degradadas.",
    icon: <Recycle className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
  {
    id: "cartografia",
    title: "Cartografia e Análise Espacial",
    description:
      "SIG, deteção remota e análise espacial para apoio à decisão.",
    icon: <Map className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
  {
    id: "distribuicao",
    title: "Distribuição Espacial e Ordenamento do Território",
    description:
      "Modelos espaciais e planeamento territorial orientado por dados.",
    icon: <Globe2 className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
  {
    id: "educacao",
    title: "Educação Ambiental e Desenvolvimento Sustentável",
    description:
      "Programas educativos e capacitação para sustentabilidade e cidadania.",
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
    href: "#projetos",
  },
];

const projetosDesenvolvidos = [
  { slug: "atlas-floristico-huila", name: "Atlas Florístico da Huíla", periodo: "2020–2022" },
  { slug: "monitorizacao-fauna-sudoeste", name: "Monitorização da Fauna do Sudoeste", periodo: "2019–2021" },
];

const projetosEmCurso = [
  { slug: "restauracao-florestal-chipindo", name: "Restauração Florestal em Chipindo", periodo: "2024–2026" },
  { slug: "sig-biodiversidade-angola", name: "SIG para Biodiversidade de Angola", periodo: "2023–2025" },
];

const tesesRelatorios = [
  { title: "Dinâmica de Florestas Miombo na Huíla", tipo: "Tese", ano: 2023, href: "/docs/miombo-huila.pdf" },
  { title: "Relatório Técnico: Coleções do Herbário LUBA", tipo: "Relatório", ano: 2024, href: "/docs/herbario-luba.pdf" },
];

export default function PesquisasPage() {               
                                                    
  return (
    <div className="min-h-screen">
      {/* Hero  <section className="pt-32 pb-20 px-4 bg-muted bg-center bg-cover-fit bg-cover relative" style={{backgroundImage: `url(/imagem4.jpg)`}}>
        <div className="absolute inset-0 bg-black/40">
         <div className="container mx-auto max-w-6xl text-center relative z-10">
           <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">Investigação</h1>
         </div>
        </div>
      </section>*/}
      <section
        className="pt-32 pb-20 md:pt-16 px-4 bg-muted bg-cover bg-cover-fit bg-center relative"
        style={{ backgroundImage: `url(/imagem5.jpg)` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">
            Investigação
            <span className="block text-white">Biodiversidade e Educação Ambiental</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Promovendo a investigação científica, conservação da biodiversidade no sudoeste de Angola
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>ISCED-Huíla, Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>Foco no Sudoeste de Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Excelência em Investigação</span>
            </div>
          </div>
        </div>
      </section>
     

      {/* Linhas de Investigação */}
      <Research
        title="Linhas de Investigação"
        subtitle="Áreas prioritárias de atuação científica"
        items={linhas}
        className="bg-background"
      />

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#002059]">Projetos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-8"></div>

            {/* Desenvolvidos */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-[#002059]">Projetos Desenvolvidos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projetosDesenvolvidos.map((p) => (
                  <Card key={p.slug} className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <Link
                          href={`/pages/pesquisas/projetos/${p.slug}`}
                          className="font-medium hover:underline text-[#14E259]"
                        >
                          {p.name}
                        </Link>
                        <p className="text-sm text-[#002059]/70">{p.periodo}</p>
                      </div>
                      <Link
                        href={`/pages/pesquisas/projetos/${p.slug}`}
                        className="text-[#129DE4] text-sm hover:underline hover:text-[#0d8bc7]"
                      >
                        Ver detalhes
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Em Curso */}
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-[#002059]">Projetos em Curso</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {projetosEmCurso.map((p) => (
                  <Card key={p.slug} className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <Link
                          href={`/pages/pesquisas/projetos/${p.slug}`}
                          className="font-medium hover:underline text-[#14E259]"
                        >
                          {p.name}
                        </Link>
                        <p className="text-sm text-[#002059]/70">{p.periodo}</p>
                      </div>
                      <Link
                        href={`/pages/pesquisas/projetos/${p.slug}`}
                        className="text-[#129DE4] text-sm hover:underline hover:text-[#0d8bc7]"
                      >
                        Ver detalhes
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teses e Relatórios */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#002059]">Teses e Relatórios</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {tesesRelatorios.map((t) => (
              <Card key={t.title} className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="p-5 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-[#14E259]">{t.title}</p>
                    <p className="text-sm text-[#002059]/70">{t.tipo} • {t.ano}</p>
                  </div>
                  <Link href={t.href} className="text-[#129DE4] text-sm hover:underline hover:text-[#0d8bc7]" download>
                    Download
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


