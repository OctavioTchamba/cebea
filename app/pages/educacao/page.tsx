import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Calendar,
  ClipboardList,
  Clock,
  Compass,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";

const formacoesRecentes = [
  {
    id: "sig-ecologia",
    title: "Curso Intensivo de SIG para Ecologia Aplicada",
    description:
      "Fundamentos de sistemas de informação geográfica, recolha de dados em campo e análise espacial aplicada à conservação.",
    date: "Janeiro 2025",
    duration: "40 horas",
    location: "ISCED-Huíla (presencial)",
    focus: ["SIG", "Análise Espacial", "Conservação"],
  },
  {
    id: "taxonomia-avancada",
    title: "Formação Avançada em Taxonomia e Colecções Científicas",
    description:
      "Metodologias de preparação, curadoria e digitalização de espécimes zoológicos e botânicos.",
    date: "Fevereiro 2025",
    duration: "32 horas",
    location: "Laboratórios CEBEA",
    focus: ["Taxonomia", "Colecções", "Bases de Dados"],
  },
  {
    id: "remoto-clima",
    title: "Deteção Remota e Alterações Climáticas",
    description:
      "Interpretação de imagens de satélite, modelação de risco climático e monitorização de uso do solo.",
    date: "Abril 2025",
    duration: "24 horas",
    location: "Formato híbrido",
    focus: ["Deteção remota", "Alterações Climáticas"],
  },
  {
    id: "educacao-comunidades",
    title: "Ações Educativas com Comunidades Rurais",
    description:
      "Ferramentas participativas para educação ambiental e planeamento de campanhas de sensibilização.",
    date: "Maio 2025",
    duration: "3 fins de semana",
    location: "Municípios parceiros",
    focus: ["Educação Ambiental", "Comunidade", "Sustentabilidade"],
  },
];

const programasPermanentes = [
  {
    title: "Academia Jovem Naturalista",
    description:
      "Programa anual para estudantes do ensino secundário com aulas práticas em ecossistemas locais.",
    highlights: [
      "Mentorias com investigadores do CEBEA",
      "Saídas de campo trimestrais",
      "Projetos científicos escolares",
    ],
  },
  {
    title: "Laboratório Vivo de Ecologia",
    description:
      "Residência prática para licenciandos com projetos integrados em ecologia, SIG e conservação.",
    highlights: [
      "40 horas de prática laboratorial",
      "Integração com linhas de investigação",
      "Certificação e publicação de resultados",
    ],
  },
  {
    title: "Rede de Educadores Ambientais",
    description:
      "Comunidade de professores e técnicos municipais com apoio continuado e recursos pedagógicos.",
    highlights: [
      "Webinars mensais",
      "Toolkit de atividades ao ar livre",
      "Biblioteca digital atualizada",
    ],
  },
];

const eventosWorkshops = [
  {
    id: "climate-hackathon",
    title: "Hackathon de Dados Climáticos",
    description:
      "Desafio colaborativo para desenvolver soluções baseadas em dados para adaptação climática.",
    date: "18–19 Julho 2025",
    location: "ISCED-Huíla",
    audience: "Estudantes universitários e profissionais de SIG",
  },
  {
    id: "oficina-herbario",
    title: "Oficina de Digitalização do Herbário LUBA",
    description:
      "Workshop prático de fotografia científica e gestão de metadados para coleções botânicas.",
    date: "2 Agosto 2025",
    location: "CEBEA",
    audience: "Técnicos de coleções e voluntários",
  },
  {
    id: "comunidades-2025",
    title: "Encontro de Educação Ambiental Comunitária",
    description:
      "Partilha de experiências com líderes comunitários e ONG’s parceiras do sul de Angola.",
    date: "21 Setembro 2025",
    location: "Lubango (Centro Cultural)",
    audience: "Organizações comunitárias e parceiros institucionais",
  },
];

export default function EducacaoPage() {
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-20 pt-32 md:pt-16"
        style={{ backgroundImage: `url(/imagem6.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Educação e Formação
            <span className="block text-white">
              Competências para a sustentabilidade
            </span>
          </h1>
          <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
            Cursos, ações educativas e programas permanentes que capacitam
            agentes de conservação e educação ambiental em Angola.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-white/80">
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              ISCED-Huíla e territórios parceiros
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Formação aplicada e certificada
            </span>
              </div>
            </div>
        </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-16 max-w-4xl text-center space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Formações Recentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground ">
              Aprendizagem contínua nas áreas de ecologia, taxonomia, SIG,
              deteção remota, bases de dados e alterações climáticas.
            </p>
            <Card>  
              <CardContent> 
                <div className="grid  block it ems-center gap-3">
                  <Image src="/imagem6.jpg" alt="Imagem" width={100} height={100} className="relative h-48 bg-cover bg-center"/>
                  <Calendar className="h-6 w-6 text-[#129DE4]" />
                  <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                    Formação em Ecologia
                  </h3>
                </div>
                <p className="text-[#002059]">
                  Capacitando a próxima geração através de programas educacionais inovadores que promovem a
                  gestão ambiental e a alfabetização científica.
                </p>
                <div className="flex flex-wrap gap-2">
                 
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto mb-16 max-w-4xl text-center space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Lista de Formações Recentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aprendizagem contínua nas áreas de ecologia, taxonomia, SIG,
              deteção remota, bases de dados e alterações climáticas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {formacoesRecentes.map((item) => (
              <Card
                key={item.id}
                className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[#002059]">
                      {item.description}
                    </p>
                </div>
                  <div className="grid gap-2 text-sm text-[#002059]/70 md:grid-cols-2">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#129DE4]" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-[#129DE4]" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-2 md:col-span-2">
                      <MapPin className="h-4 w-4 text-[#129DE4]" />
                      {item.location}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.focus.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#129DE4]/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#129DE4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
            </div>
        </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Programas Permanentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Iniciativas continuadas que garantem formação prática e apoio às
              comunidades educativas ao longo de todo o ano.
            </p>
                </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {programasPermanentes.map((programa) => (
              <Card
                key={programa.title}
                className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <ClipboardList className="h-6 w-6 text-[#129DE4]" />
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      {programa.title}
                                </h3>
                  </div>
                  <p className="text-[#002059]">
                    {programa.description}
                  </p>
                  <ul className="space-y-2 text-sm text-[#002059]">
                    {programa.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#14E259]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center space-y-4">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Eventos e Workshops
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Agenda dinâmica com oportunidades de partilha de conhecimento,
              desenvolvimento de competências e integração com parceiros.
            </p>
                </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {eventosWorkshops.map((evento) => (
              <Card
                key={evento.id}
                className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-3">
                    <Compass className="h-6 w-6 text-[#129DE4]" />
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      {evento.title}
                    </h3>
            </div>
                  <p className="text-[#002059]">{evento.description}</p>
                  <div className="space-y-2 text-sm text-[#002059]/70">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#129DE4]" />
                      {evento.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#129DE4]" />
                      {evento.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#129DE4]" />
                      {evento.audience}
                    </span>
                </div>
                    </CardContent>
                </Card>
            ))}
            </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" asChild>
              <Link href="/contactos?interesse=formacao">
                Inscrever-se / Saber Mais
              </Link>
            </Button>
              </div>
        </div>
        </section>
    </div>
  );
}
