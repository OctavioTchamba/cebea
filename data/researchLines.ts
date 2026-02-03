import { Dna, TreeDeciduous, Droplets, Mountain, Bird, Bug, Database, Map, GraduationCap, FileText, Globe } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ResearchLine {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  projects: number;
  status: "active" | "inactive";
}

export const researchLines: ResearchLine[] = [
  {
    id: 1,
    icon: Database,
    title: "Estudos das Coleções Científicas",
    description: "Investigação sobre um sistema de manutenção, informação e documentação dos registos históricos da diversidade biológica da região e do país.",
    projects: 8,
    status: "active",
  },
  {
    id: 2,
    icon: Bird,
    title: "Biodiversidade",
    description: "Desenvolvimento de investigação científica destinada a conhecer os recursos biológicos locais e nacionais, apoio na definição políticas e prioridades de conservação, fomento do conhecimento tradicional associado a biodiversidade, ecossistemas sensíveis e de grande interesse biológico.",
    projects: 15,
    status: "active",
  },
  {
    id: 3,
    icon: TreeDeciduous,
    title: "Florestas",
    description: "Investigação sobre os processos de degradação florestal e avaliação de políticas de recuperação, com ênfase no uso de espécies nativas e de relevância ecológica ou económica.",
    projects: 12,
    status: "active",
  },
  {
    id: 4,
    icon: Mountain,
    title: "Reflorestamento e Recuperação Ambiental",
    description: "Desenvolvimento de estudos sobre a adaptação de espécies e a capacidade de reflorestamento em áreas degradadas, incluindo pesquisas voltadas ao incentivo e aprimoramento da produção de mudas de espécies nativas para programas de restauração ecológica.",
    projects: 10,
    status: "active",
  },
  {
    id: 5,
    icon: Map,
    title: "Cartografia e Análise Espacial",
    description: "Produção de mapas diversos com recurso aos Sistemas de Informação Geográfica e Deteção Remota.",
    projects: 9,
    status: "active",
  },
  {
    id: 6,
    icon: Globe,
    title: "Distribuição Espacial e Ordenamento do Território",
    description: "Distribuição Espacial de eventos geográficos, espécies, dinâmicas populacionais, desenvolvimento social e Ordenamento do Território.",
    projects: 7,
    status: "active",
  },
  {
    id: 7,
    icon: GraduationCap,
    title: "Educação Ambiental e Desenvolvimento Sustentável",
    description: "Realização de ações formativas em Ecologia, Taxonomia, biodiversidade, Sistemas de Informação Geográfica, Deteção Remota, Bases de Dados de Coleções biológicas, alterações climáticas e desenvolvimento sustentável, entre outras de interesse.",
    projects: 11,
    status: "active",
  },
];
