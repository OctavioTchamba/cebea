export type AreaAtuacao = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  icon: string;
  highlights: string[];
  activities: string[];
  featuredProjects: { name: string; period: string; description: string }[];
};

export const areasDeAtuacao: AreaAtuacao[] = [
  {
    slug: "zoologia",
    title: "Zoologia",
    summary:
      "Investigação científica sobre a fauna angolana, conservação de espécies ameaçadas e gestão de coleções zoológicas.",
    description:
      "A equipa de Zoologia do CEBEA desenvolve investigação científica em estudos taxonómicos, ecológicos e de conservação da fauna angolana, com foco especial em ecossistemas locais e regionais do sudoeste do país. As coleções zoológicas, resultado de décadas de trabalho de campo, são fundamentais para apoiar investigação, ensino e políticas públicas de conservação.",
    image: "/imagem4.jpg",
    icon: "PawPrint",
    highlights: [
      "Coleções zoológicas com mais de 12.000 espécimes catalogados",
      "Inventários faunísticos em áreas prioritárias de conservação",
      "Monitorização de espécies endémicas e ameaçadas",
    ],
    activities: [
      "Campanhas de campo para recolha de dados e espécimes",
      "Estudos de ecologia trófica e dinâmica populacional",
      "Avaliações de impacto ambiental com foco em fauna",
      "Formação em taxonomia aplicada e conservação",
    ],
    featuredProjects: [
      {
        name: "Monitorização da Fauna do Deserto do Namibe",
        period: "2023–2025",
        description:
          "Levantamento de mamíferos e répteis em áreas-chave, com utilização de armadilhas fotográficas e sensores remotos.",
      },
      {
        name: "Programa de Conservação de Aves Endémicas",
        period: "2022–2024",
        description:
          "Parceria com parques nacionais para proteção de aves raras, com ações de educação comunitária.",
      },
    ],
  },
  {
    slug: "herbario-base-dados",
    title: "Herbário e Base de dados",
    summary:
      "Curadoria do Herbário LUBA e desenvolvimento de bases de dados florísticas e ecológicas de Angola.",
    description:
      "O Herbário LUBA é uma referência para a flora do sudoeste de Angola e ecossistemas regionais. A equipa desenvolve investigação científica em botânica, curadoria de coleções e gestão de bases de dados florísticas e ecológicas. Com tecnologias de digitalização e gestão de dados, documenta e disponibiliza informação crítica para investigação, conservação e uso sustentável da biodiversidade em Angola.",
    image: "/imagem2.jpg",
    icon: "Flower",
    highlights: [
      "Coleção botânica com 5.000+ espécimes",
      "Digitalização e disponibilização online do acervo",
      "Base de dados florística integrada com redes internacionais",
    ],
    activities: [
      "Inventários florísticos em ecossistemas prioritários",
      "Digitalização e curadoria de espécimes",
      "Modelação de distribuição de espécies vegetais",
      "Formação em gestão de coleções botânicas",
    ],
    featuredProjects: [
      {
        name: "Atlas Florístico da Huíla",
        period: "2020–2022",
        description:
          "Mapeamento da diversidade vegetal com apoio de imagens de satélite e dados de campo.",
      },
      {
        name: "Programa de Digitalização do Herbário LUBA",
        period: "2021–2024",
        description:
          "Digitalização de espécimes e criação de portal online para acesso aberto a investigadores.",
      },
    ],
  },
  {
    slug: "cartografia-analise-espacial",
    title: "Cartografia e Análise Espacial com Detenção Remota",
    summary:
      "Aplicação de SIG, deteção remota e modelação espacial para apoiar a conservação e o ordenamento do território.",
    description:
      "A área de Cartografia e Análise Espacial com Detenção Remota desenvolve soluções baseadas em geotecnologias para monitorizar ecossistemas, analisar pressões ambientais e apoiar decisões estratégicas em Angola. Utiliza técnicas avançadas de sensoriamento remoto para mapeamento e análise de ecossistemas locais e regionais.",
    image: "/imagem5.jpg",
    icon: "Map",
    highlights: [
      "Laboratório equipado com ferramentas SIG open-source e proprietárias",
      "Modelos de previsão para alterações de uso do solo",
      "Dashboards interativos para acompanhamento de indicadores ambientais",
    ],
    activities: [
      "Análise multitemporal de imagens de satélite",
      "Desenvolvimento de mapas temáticos e cartogramas",
      "Modelação de habitats e corredores ecológicos",
      "Treinamentos em SIG aplicado à conservação",
    ],
    featuredProjects: [
      {
        name: "SIG para Biodiversidade de Angola",
        period: "2023–2025",
        description:
          "Plataforma geoespacial para integrar dados de biodiversidade, clima e uso do solo.",
      },
      {
        name: "Observatório de Alterações Climáticas",
        period: "2024–2026",
        description:
          "Monitorização de vulnerabilidades climáticas com indicadores em tempo quase real.",
      },
    ],
  },
  {
    slug: "conservacao-carbono-florestas",
    title: "Conservação, carbono e florestas",
    summary:
      "Proteção de ecossistemas florestais, contabilização de carbono e restauração de paisagens.",
    description:
      "A equipa desenvolve investigação científica e ações práticas para proteger florestas nativas, implementar projetos de carbono e restaurar áreas degradadas em Angola. Trabalha com comunidades e decisores para conciliar conservação e uso sustentável da biodiversidade com desenvolvimento socioeconómico, com foco especial em ecossistemas locais e regionais.",
    image: "/imagem7.jpg",
    icon: "TreePine",
    highlights: [
      "Inventários florestais em parceria com comunidades",
      "Avaliação de stocks de carbono e serviços ecossistémicos",
      "Planos de restauração ecológica participativa",
    ],
    activities: [
      "Inventário e monitorização de biomassa florestal",
      "Implementação de viveiros e plantios nativos",
      "Avaliação de projetos REDD+ e créditos de carbono",
      "Educação ambiental focada em serviços ecossistémicos",
    ],
    featuredProjects: [
      {
        name: "Restauração Florestal em Chipindo",
        period: "2024–2026",
        description:
          "Projetos de recuperação de áreas degradadas com espécies nativas e monitorização de carbono.",
      },
      {
        name: "Programa Miombo Sustentável",
        period: "2022–2025",
        description:
          "Gestão comunitária de florestas Miombo com alternativas sustentáveis de rendimento.",
      },
    ],
  },
  {
    slug: "educacao-desenvolvimento-sustentavel",
    title: "Formação, Educação Ambiental e Desenvolvimento sustentável",
    summary:
      "Capacitação de educadores, comunidades e instituições para promover sustentabilidade e cidadania ambiental.",
    description:
      "Programas abrangentes de formação, educação ambiental, desenvolvimento de competências e sensibilização comunitária para fomentar uma cultura de sustentabilidade e participação cidadã. A área promove a formação de profissionais qualificados em biodiversidade e educação ambiental, contribuindo para o desenvolvimento sustentável em Angola.",
    image: "/imagem3.jpg",
    icon: "GraduationCap",
    highlights: [
      "Programas educativos em 12 municípios",
      "Materiais pedagógicos adaptados à realidade local",
      "Campanhas de sensibilização em rádio e escolas",
    ],
    activities: [
      "Oficinas e cursos para professores e líderes comunitários",
      "Campanhas de educação ambiental em escolas",
      "Produção de materiais didáticos e podcasts",
      "Mentorias para clubes científicos escolares",
    ],
    featuredProjects: [
      {
        name: "Academia Jovem Naturalista",
        period: "2021–Atual",
        description:
          "Programa anual com estudantes do ensino secundário envolvendo saídas de campo e projetos científicos.",
      },
      {
        name: "Rede de Educadores Ambientais do Sul de Angola",
        period: "2023–Atual",
        description:
          "Rede colaborativa com formação contínua e partilha de recursos pedagógicos.",
      },
    ],
  },
];

