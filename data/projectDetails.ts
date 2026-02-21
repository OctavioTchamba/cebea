import { getProjectImage } from "./publicImages";

// Interface TypeScript para os projetos
export interface Projeto {
  slug: string;
  title: string;
  periodo: string;
  description: string;
  fullDescription: string;
  image: string;
  status: "Concluído" | "Em Curso" | "Aguarda Financiamento";
  location: string;
  coordenador: string;
  partners: string[];
  objectives: string[];
  results: string[];
  funding: string;
  duracao?: string;
}

export const projetosData: Projeto[] = [
  // PROJETOS 2022-2024
  {
    slug: "cubango-guide",
    title: "Guia de Identificação das Plantas da Bacia do Cubango",
    periodo: "2023",
    description: "Capacitação de 30 técnicos de campo em botânica, identificação de espécies nativas e invasoras; Produção de um Guia de identificação de plantas da bacia do Cubango.",
    fullDescription: "O projeto desenvolveu capacitação intensiva para técnicos de campo em botânica e identificação de espécies, com foco especial em espécies nativas e invasoras da Bacia do Cubango. Resultou na produção de um guia completo de identificação de plantas desta importante região hidrográfica.",
    image: getProjectImage(0),
    status: "Concluído",
    location: "Bacia do Cubango, Angola",
    coordenador: "José João Tchamba",
    partners: ["CEBEA", "Serviços Florestais dos Estados Unidos (USFS)"],
    objectives: [
      "Capacitar 30 técnicos de campo em botânica",
      "Identificar espécies nativas e invasoras",
      "Produzir Guia de identificação de plantas da bacia do Cubango"
    ],
    results: [
      "30 técnicos capacitados em botânica",
      "Guia de identificação produzido e publicado",
      "Espécies nativas e invasoras documentadas"
    ],
    funding: "Serviços Florestais dos Estados Unidos (USFS)",
    duracao: "01/08/2023 - 30/12/2023"
  },
  {
    slug: "digitalization-luba",
    title: "Digitalization of Specimens and LUBA Herbarium's Collection Update",
    periodo: "2024",
    description: "Criar o banco de dados de imagens digitais e aumentar o número de espécimes da coleção do Herbário LUBA.",
    fullDescription: "Projeto de digitalização sistemática dos espécimes do Herbário LUBA, criando um banco de dados digital de imagens de alta qualidade. O projeto visa modernizar a gestão da coleção e facilitar o acesso à informação botânica.",
    image: getProjectImage(1),
    status: "Em Curso",
    location: "CEBEA, ISCED-Huíla",
    coordenador: "José João Tchamba",
    partners: ["CEBEA", "International Plants Taxonomy Group (IAPT)"],
    objectives: [
      "Criar banco de dados de imagens digitais",
      "Aumentar o número de espécimes da coleção",
      "Modernizar gestão do herbário"
    ],
    results: [
      "Contratação de um estagiário",
      "Processo de digitalização em andamento"
    ],
    funding: "International Plants Taxonomy Group (IAPT)",
    duracao: "01/01/2024 - 30/12/2024"
  },
  {
    slug: "pira",
    title: "Projeto Integrado de Resiliência Ambiental (PIRA)",
    periodo: "2023-2024",
    description: "Desenvolvimento da cartografia das rotas de transumância na província do Namibe e identificação de espécies de plantas nativas utilizadas na alimentação e cura de enfermidades do gado.",
    fullDescription: "O PIRA desenvolveu investigação sobre plantas etnoveterinárias, mapeando conhecimento tradicional sobre uso de plantas para tratamento de gado. O projeto resultou na publicação de artigo científico e manual prático de plantas etnoveterinárias.",
    image: getProjectImage(2),
    status: "Concluído",
    location: "Província do Namibe, Angola",
    coordenador: "José João Tchamba",
    partners: ["CEBEA", "ADESPOV"],
    objectives: [
      "Recolha de dados etnoveterinários",
      "Publicação de manual de plantas etnoveterinárias",
      "Publicação de artigo científico"
    ],
    results: [
      "Artigo científico publicado",
      "Guia de etnoveterinária produzido e publicado",
      "Inquérito sobre plantas etnoveterinárias do Namibe concluído"
    ],
    funding: "ADESPOV",
    duracao: "01/07/2023 - 30/12/2024"
  },
  {
    slug: "bicuar-geo-trees",
    title: "Bicuar Geo-Trees",
    periodo: "2024",
    description: "Projeto de investigação científica sobre árvores e ecossistemas florestais no Parque Nacional do Bicuar, utilizando geotecnologias e métodos modernos de análise.",
    fullDescription: "O projeto Bicuar Geo-Trees está desenvolvendo infraestrutura de monitorização florestal no Parque Nacional do Bicuar, incluindo parcelas permanentes e formação de recursos humanos em biodiversidade, ecologia e conservação.",
    image: getProjectImage(3),
    status: "Em Curso",
    location: "Parque Nacional do Bicuar, Angola",
    coordenador: "José João Tchamba",
    partners: ["CEBEA", "Smithsonian Tropical Institute"],
    objectives: [
      "Melhorar infraestrutura dos acampamentos do PNB",
      "Implementar parcelas permanentes no PNB",
      "Formar fiscais em carpintaria, electricidade e canalização",
      "Formar 10 mestres em Biodiversidade, Ecologia e Conservação"
    ],
    results: [
      "Parcelas permanentes implementadas no PNB",
      "Fiscais formados em carpintaria, electricidade e canalização",
      "Infraestrutura dos acampamentos melhorada"
    ],
    funding: "Smithsonian Tropical Institute",
    duracao: "31/01/2024 - 30/12/2024"
  },
  {
    slug: "cosca",
    title: "Cogumelos Silvestres Comestíveis de Angola (COSCA)",
    periodo: "2025-2026",
    description: "Investigação científica sobre cogumelos silvestres comestíveis de Angola, documentando diversidade, distribuição e potencial de uso sustentável.",
    fullDescription: "O projeto COSCA está desenvolvendo o primeiro inventário abrangente dos cogumelos utilizados como alimento em Angola, identificando espécies e analisando suas propriedades alimentares e funcionais através de técnicas modernas incluindo Barcoding DNA.",
    image: getProjectImage(4),
    status: "Em Curso",
    location: "Angola",
    coordenador: "José Luís Alexandre",
    partners: ["CEBEA", "FUNDECIT"],
    objectives: [
      "Fazer primeiro inventário dos cogumelos comestíveis de Angola",
      "Identificar espécies através de Barcoding DNA",
      "Analisar propriedades alimentares e funcionais"
    ],
    results: [
      "Recolha e identificação de espécies em progresso",
      "Barcoding DNA identification em desenvolvimento",
      "Livro e artigos científicos previstos"
    ],
    funding: "FUNDECIT",
    duracao: "2025 - 2026"
  },
  {
    slug: "diversidade-floristica-mupa",
    title: "Avaliação da Diversidade Florística do Parque Nacional da Mupa",
    periodo: "2024-2026",
    description: "Investigação científica sobre diversidade florística do Parque Nacional da Mupa, com foco em projeções futuras de biomassa e stocks de carbono.",
    fullDescription: "Este projeto visa estabelecer parcelas de monitorização no Parque Nacional da Mupa para avaliar biomassa e stocks de carbono, inicialmente focando na componente arbórea, com expansão futura para outros aspectos do biota.",
    image: getProjectImage(7),
    status: "Em Curso",
    location: "Parque Nacional da Mupa, Angola",
    coordenador: "António Valter Chisingui",
    partners: ["CEBEA", "PDCT"],
    objectives: [
      "Estabelecer parcelas permanentes no PNM",
      "Criar infraestruturas de monitorização de biomassa",
      "Avaliar stocks de carbono",
      "Desenvolver projeções futuras"
    ],
    results: [
      "Aguarda financiamento para implementação completa"
    ],
    funding: "PDCT",
    duracao: "31/01/2024 - 30/12/2026"
  },
  {
    slug: "sciona",
    title: "SCIONA",
    periodo: "2018-2021",
    description: "Consolidação da gestão de ecossistemas e proteção da vida selvagem na Área de Conservação Transfronteira entre Iona e Skeleton Coast.",
    fullDescription: "Projeto que consolidou gestão de ecossistemas e proteção da vida selvagem na TFCA Iona-Skeleton Coast, aplicando tecnologias de monitorização em biodiversidade, água, solos e comunidades.",
    image: getProjectImage(12),
    status: "Concluído",
    location: "Área de Conservação Transfronteira Iona-Skeleton Coast",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Ministério de Educação e Pesquisa da Alemanha (BMBF)"],
    objectives: [
      "Consolidar gestão de ecossistemas",
      "Proteger vida selvagem",
      "Aplicar tecnologias de monitorização",
      "Envolver comunidades locais"
    ],
    results: [
      "Levantamentos de fauna realizados",
      "Estudo da dinâmica das populações de zebras do PN Iona concluído"
    ],
    funding: "Ministério de Educação e Pesquisa da Alemanha (BMBF)",
    duracao: "2018 - 2021"
  },
  {
    slug: "ircea",
    title: "IRCEA",
    periodo: "2020-2022",
    description: "Identificação de espécies da flora local com propriedades biocidas para valorização e adoção de práticas ambientalmente saudáveis.",
    fullDescription: "Projeto que identificou espécies da flora local com propriedades biocidas, contribuindo para valorização de plantas nativas e adoção de práticas ambientalmente saudáveis na gestão de pragas e doenças agrícolas.",
    image: getProjectImage(8),
    status: "Concluído",
    location: "Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "FAO"],
    objectives: [
      "Identificar espécies com propriedades biocidas",
      "Valorizar flora local",
      "Contribuir para práticas ambientalmente saudáveis",
      "Apoiar pequenos agricultores"
    ],
    results: [
      "Catálogo com plantas com interesse biocida produzido (26 espécies)"
    ],
    funding: "FAO",
    duracao: "2020 - 2022"
  },

  // PROJETOS DE EXTENSÃO
  {
    slug: "qualidade-agua-comboni",
    title: "Análise da Qualidade da Água da Zona 2 do Bairro Comandante Cow-boy (Comboni)",
    periodo: "2024",
    description: "Estudo científico sobre a qualidade da água na Zona 2 do Bairro Comandante Cow-boy (Comboni), contribuindo para saúde pública e gestão ambiental urbana.",
    fullDescription: "Projeto de análise dos padrões e propriedades da água consumida na zona do Kalumbiro, Lubango, visando avaliar qualidade e segurança para consumo humano.",
    image: getProjectImage(5),
    status: "Aguarda Financiamento",
    location: "Bairro Comandante Cow-boy (Comboni), Lubango",
    coordenador: "Marina Filomena Rafael",
    partners: ["CEBEA"],
    objectives: [
      "Analisar padrões e propriedades da água",
      "Avaliar qualidade da água para consumo",
      "Contribuir para saúde pública"
    ],
    results: [
      "Aguarda financiamento"
    ],
    funding: "Fundos Próprios",
    duracao: "1 ano"
  },
  {
    slug: "ciencia-comunidade",
    title: "Ciência na Comunidade",
    periodo: "2024-2027",
    description: "Projeto de aproximação entre ciência e comunidades locais, promovendo o conhecimento científico sobre biodiversidade e conservação ambiental.",
    fullDescription: "O projeto visa proporcionar aos alunos das escolas da periferia da cidade do Lubango oportunidades de conhecimento da biodiversidade e interação com os investigadores do ISCED-Huíla, promovendo educação científica.",
    image: getProjectImage(6),
    status: "Aguarda Financiamento",
    location: "Lubango, Angola",
    coordenador: "Marina Filomena Rafael",
    partners: ["CEBEA"],
    objectives: [
      "Promover educação científica nas escolas",
      "Proporcionar conhecimento da biodiversidade",
      "Facilitar interação com investigadores"
    ],
    results: [
      "Aguarda financiamento"
    ],
    funding: "Fundos Próprios",
    duracao: "2024 - 2027"
  },
  {
    slug: "requalificacao-arboreto",
    title: "Requalificação do Arboreto do ISCED-Huíla",
    periodo: "2024",
    description: "Valorização do espaço verde institucional para proporcionar área de aulas práticas e estudo aos estudantes do ISCED-Huíla.",
    fullDescription: "Projeto de requalificação do arboreto do ISCED-Huíla, criando um espaço verde valorizado para realização de aulas práticas e estudos botânicos.",
    image: getProjectImage(9),
    status: "Aguarda Financiamento",
    location: "ISCED-Huíla, Lubango",
    coordenador: "José João Tchamba",
    partners: ["CEBEA"],
    objectives: [
      "Valorizar espaço verde da instituição",
      "Criar área para aulas práticas",
      "Proporcionar espaço de estudo"
    ],
    results: [
      "Aguarda financiamento"
    ],
    funding: "Fundos Próprios",
    duracao: "1 ano"
  },

  // PROJETOS 2010-2022
  {
    slug: "digitalizacao-herbario-2010",
    title: "Digitalização e Disponibilização Online de Espécimes de Herbário",
    periodo: "2010-2014",
    description: "Projeto pioneiro de digitalização de espécimes do herbário e criação de base de dados online, seguindo protocolos internacionais.",
    fullDescription: "Projeto que estabeleceu metodologia de digitalização do herbário, criando base de dados com protocolos internacionais padronizados e formando recursos humanos em processamento digital de imagem.",
    image: getProjectImage(10),
    status: "Concluído",
    location: "CEBEA, ISCED-Huíla",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Fundação Andrew Mellon"],
    objectives: [
      "Digitalizar espécimes do herbário",
      "Criar base de dados padronizada",
      "Formar recursos humanos em digitalização"
    ],
    results: [
      "Metodologia de digitalização dominada",
      "Graduado formado em processamento digital de imagem",
      "Equipamento adquirido (Scanner, PC, Barcode reader, Impressoras)"
    ],
    funding: "Fundação Andrew Mellon",
    duracao: "2010 - 2014"
  },
  {
    slug: "mount-moco",
    title: "Conserving Angola's Threatened Afromontane Forests",
    periodo: "2009-2011",
    description: "Projeto de conservação das florestas Afromontanas ameaçadas de Angola, com abordagem comunitária para combater a perda florestal no Monte Moco.",
    fullDescription: "Projeto focado na conservação da Floresta Afromontana e avifauna do Monte Moco, incluindo trabalhos sobre modos de vida das comunidades e instalação de viveiro de árvores nativas.",
    image: getProjectImage(11),
    status: "Concluído",
    location: "Monte Moco, Angola",
    coordenador: "Francisco Pedro Maito Gonçalves",
    partners: ["CEBEA", "The Rudford Foundation"],
    objectives: [
      "Implementar ações de conservação da Floresta Afromontana",
      "Proteger avifauna da região",
      "Envolver comunidades locais"
    ],
    results: [
      "Trabalhos de fim de curso sobre comunidades de Kanjonde",
      "Estudo da avifauna concluído",
      "Viveiro de árvores da floresta Afromontana instalado"
    ],
    funding: "The Rudford Foundation",
    duracao: "2009 - 2011"
  },
  {
    slug: "future-okavango",
    title: "THE FUTURE OKAVANGO – TFO",
    periodo: "2011-2015",
    description: "Projeto internacional de investigação sobre o futuro da Bacia do Okavango, uma das mais importantes áreas de conservação da África Austral.",
    fullDescription: "Projeto que forneceu conhecimentos científicos para planos de gestão transfronteiriços integrados da região do Okavango, visando uso sustentável dos serviços ecossistémicos.",
    image: getProjectImage(13),
    status: "Concluído",
    location: "Bacia do Okavango, Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Ministério de Educação e Pesquisa da Alemanha (BMBF)"],
    objectives: [
      "Fornecer conhecimentos para gestão transfronteiriça",
      "Promover uso sustentável de serviços ecossistémicos",
      "Estudar estrutura e dinâmica da vegetação"
    ],
    results: [
      "Estrutura e dinâmica da vegetação em Chitembo e Caiundo conhecidas",
      "Recursos vegetais e seu valor ecológico e social documentados",
      "Equipamento para trabalho de campo adquirido"
    ],
    funding: "Ministério de Educação e Pesquisa da Alemanha (BMBF)",
    duracao: "2011 - 2015"
  },
  {
    slug: "diversidade-floristica-escarpa",
    title: "Diversidade Florística da Escarpa de Angola",
    periodo: "2012-2015",
    description: "Investigação científica sobre a diversidade florística da Escarpa de Angola, uma região de elevada biodiversidade e importância ecológica.",
    fullDescription: "Projeto que avaliou a diversidade florística e graus de endemismo da Escarpa de Angola, realizando levantamentos em áreas selecionadas da região.",
    image: getProjectImage(14),
    status: "Concluído",
    location: "Escarpa de Angola",
    coordenador: "Francisco Pedro Maito Gonçalves",
    partners: ["CEBEA", "MESCTI"],
    objectives: [
      "Avaliar diversidade florística da Escarpa",
      "Determinar graus de endemismo",
      "Realizar levantamentos botânicos"
    ],
    results: [
      "Levantamento da flora em Quilengues, Serra da Chela, Serra da Neve e Kumbira",
      "Espécies endêmicas documentadas"
    ],
    funding: "MESCTI",
    duracao: "2012 - 2015"
  },
  {
    slug: "parceria-rhodes-kew",
    title: "Parceria com Universidade de Rhodes e Royal Botanic Gardens Kew",
    periodo: "2012-2016",
    description: "Projeto colaborativo para ampliação da coleção botânica do Herbário LUBA com parceiros internacionais.",
    fullDescription: "Colaboração internacional que resultou na ampliação da coleção do herbário, identificação de espécies e descrição de novas espécies para Angola e para a ciência.",
    image: getProjectImage(15),
    status: "Concluído",
    location: "CEBEA, ISCED-Huíla",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Universidade de Rhodes (África do Sul)", "The Royal Botanic Gardens, Kew (Reino Unido)", "The Rudford Foundation"],
    objectives: [
      "Ampliar coleção botânica do HMOML",
      "Identificar espécies",
      "Descrever novas espécies"
    ],
    results: [
      "Coleção ampliada",
      "Espécies identificadas",
      "Novas espécies descritas para Angola e para a ciência"
    ],
    funding: "The Rudford Foundation",
    duracao: "2012 - 2016"
  },
  {
    slug: "atlas-mamiferos-angola",
    title: "Atlas de Mamíferos de Angola",
    periodo: "2012-2015",
    description: "Projeto de criação de atlas completo dos mamíferos de Angola, desenvolvido em parceria com Universidade de Cape Town e IICT.",
    fullDescription: "Projeto colaborativo que gerou conhecimento sobre distribuição de mamíferos de Angola, criando mapas de distribuição para todas as espécies registadas e desenvolvendo website para partilha de informação.",
    image: getProjectImage(16),
    status: "Concluído",
    location: "Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Universidade de Cape Town (África do Sul)", "IICT (Portugal)", "MESCTI"],
    objectives: [
      "Gerar conhecimento sobre distribuição de mamíferos",
      "Criar mapas de distribuição",
      "Desenvolver website para partilha de informação"
    ],
    results: [
      "Website do Atlas de Mamíferos de Angola lançado",
      "Equipamento adquirido (servidor Yahclick, Câmara GPS)",
      "2 estudantes formados a nível de Mestrado"
    ],
    funding: "MESCTI",
    duracao: "2012 - 2015"
  },
  {
    slug: "sasscal",
    title: "SASSCAL - Centro Regional de Ciência e Serviços",
    periodo: "2013-2017",
    description: "Participação no SASSCAL, centro regional de ciência e serviços desenvolvido em parceria com universidades europeias e africanas.",
    fullDescription: "Projeto que estabeleceu rede de centros de serviço científico na região SADC, proporcionando conhecimento para lidar com mudanças climáticas e de uso do solo.",
    image: getProjectImage(17),
    status: "Concluído",
    location: "África Austral",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "Universidade de Hamburgo", "Universidade de Cape Town", "Universidade de Botswana", "Universidade da Namíbia", "Universidade de Trier", "BMBF"],
    objectives: [
      "Estabelecer rede de centros de ciência regional",
      "Reforçar capacidade científica",
      "Proporcionar conhecimento sobre mudanças climáticas"
    ],
    results: [
      "Estações meteorológicas instaladas (Tundavala, Bicuar, Chitembo, Caiundo)",
      "Levantamentos botânicos realizados",
      "Mapas de vegetação elaborados",
      "6 cursos de formação em métodos de biodiversidade realizados"
    ],
    funding: "Ministério de Educação e Pesquisa da Alemanha (BMBF)",
    duracao: "2013 - 2017"
  },
  {
    slug: "conservacao-biodiversidade-animal",
    title: "Conservação da Biodiversidade Animal",
    periodo: "2010-2022",
    description: "Projeto focado na conservação da biodiversidade animal em Angola, desenvolvendo estratégias e ações práticas de proteção de espécies e habitats.",
    fullDescription: "Projeto que gerou e forneceu informações cientificamente corretas para processos políticos e de planeamento que promovem melhoria das condições de vida da sociedade.",
    image: getProjectImage(18),
    status: "Concluído",
    location: "Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA"],
    objectives: [
      "Gerar informações científicas relevantes",
      "Apoiar processos políticos e de planeamento",
      "Promover conservação da biodiversidade"
    ],
    results: [
      "Equipamento adquirido (Plotter, computadores, material de herbário)"
    ],
    funding: "Fundos próprios"
  },
  {
    slug: "mapa-vegetacao-huila",
    title: "Elaboração do Mapa de Vegetação da Província da Huíla",
    periodo: "2010-2022",
    description: "Desenvolvimento de mapa completo e detalhado da vegetação da Província da Huíla, utilizando técnicas de cartografia e análise espacial.",
    fullDescription: "Projeto que elaborou mapa detalhado da vegetação da Província da Huíla, identificando tipos de vegetação, distribuição e características ecológicas.",
    image: getProjectImage(19),
    status: "Concluído",
    location: "Província da Huíla, Angola",
    coordenador: "António Valter Chisingui",
    partners: ["CEBEA"],
    objectives: [
      "Mapear tipos de vegetação da Huíla",
      "Documentar distribuição espacial",
      "Criar ferramenta de gestão territorial"
    ],
    results: [
      "Mapa de vegetação elaborado"
    ],
    funding: "Fundos próprios"
  },
  {
    slug: "observatorios-biodiversidade",
    title: "Implantação de Observatórios de Biodiversidade em Angola",
    periodo: "2010-2022",
    description: "Projeto de estabelecimento de observatórios de biodiversidade em Angola, criando redes de monitorização e investigação científica.",
    fullDescription: "Projeto que estabeleceu observatórios de biodiversidade em locais estratégicos, criando infraestrutura de monitorização científica a longo prazo.",
    image: getProjectImage(20),
    status: "Concluído",
    location: "Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA"],
    objectives: [
      "Estabelecer observatórios de biodiversidade",
      "Criar rede de monitorização",
      "Gerar dados de longo prazo"
    ],
    results: [
      "Laboratório de entomologia instalado"
    ],
    funding: "Fundos próprios"
  },
  {
    slug: "capacitacao-metodos-biodiversidade",
    title: "Capacitação e Formação em Métodos de Estudo da Biodiversidade",
    periodo: "2010-2022",
    description: "Projeto de capacitação e formação de investigadores e técnicos em métodos modernos de estudo da biodiversidade.",
    fullDescription: "Projeto que desenvolveu programas de capacitação para investigadores, técnicos e estudantes em métodos modernos de estudo da biodiversidade.",
    image: getProjectImage(21),
    status: "Concluído",
    location: "CEBEA, ISCED-Huíla",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA"],
    objectives: [
      "Capacitar investigadores e técnicos",
      "Transmitir métodos modernos",
      "Fortalecer competências científicas"
    ],
    results: [
      "Biblioteca especializada adquirida"
    ],
    funding: "Fundos próprios"
  },
  {
    slug: "seosaw",
    title: "SEOSAW (Socio-Ecological Observatory for Southern African Woodlands)",
    periodo: "2018-2026",
    description: "Participação no observatório socio-ecológico para florestas da África Austral, investigando interações entre sociedade e ecossistemas florestais.",
    fullDescription: "Projeto de monitorização a longo prazo de florestas do Miombo, estabelecendo parcelas permanentes e formando recursos humanos especializados.",
    image: getProjectImage(22),
    status: "Em Curso",
    location: "África Austral",
    coordenador: "Francisco Pedro Gonçalves",
    partners: ["CEBEA", "Rede SEOSAW"],
    objectives: [
      "Monitorizar florestas do Miombo a longo prazo",
      "Implementar parcelas permanentes",
      "Formar recursos humanos"
    ],
    results: [
      "16 parcelas de 1 hectare implementadas",
      "3 mestres formados"
    ],
    funding: "Rede SEOSAW",
    duracao: "2018 - 2026"
  },
  {
    slug: "retesa",
    title: "RETESA",
    periodo: "2017-2019",
    description: "Levantamento de medicamentos veterinários tradicionais e produção de materiais educativos para Escolas de Campo Agro-Pastoris.",
    fullDescription: "Projeto que realizou levantamento sobre medicamentos veterinários tradicionais, identificando os mais efetivos para doenças comuns e produzindo panfletos para uso nas ECAPe Escolas de Campo Agro-Pastoris.",
    image: getProjectImage(23),
    status: "Concluído",
    location: "Angola",
    coordenador: "Fernanda Maria Pires Lages",
    partners: ["CEBEA", "FAO"],
    objectives: [
      "Realizar levantamento sobre medicamentos veterinários tradicionais",
      "Identificar tratamentos mais efetivos",
      "Produzir panfletos para Escolas de Campo Agro-Pastoris"
    ],
    results: [
      "Catálogo de plantas com interesse veterinário produzido (50 espécies diferentes)"
    ],
    funding: "FAO",
    duracao: "2017 - 2019"
  }
];

// Função auxiliar para obter projeto por slug
export function getProjetoBySlug(slug: string): Projeto | undefined {
  return projetosData.find(projeto => projeto.slug === slug);
}

// Função auxiliar para obter projetos por status
export function getProjetosByStatus(status: Projeto['status']): Projeto[] {
  return projetosData.filter(projeto => projeto.status === status);
}

// Função auxiliar para obter projetos por coordenador
export function getProjetosByCoordenador(coordenador: string): Projeto[] {
  return projetosData.filter(projeto => projeto.coordenador === coordenador);
}

// Exportar como Record para compatibilidade com código existente
export const projetosDataRecord: Record<string, Projeto> = projetosData.reduce((acc, projeto) => {
  acc[projeto.slug] = projeto;
  return acc;
}, {} as Record<string, Projeto>);
