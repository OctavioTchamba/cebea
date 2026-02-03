import { LucideIcon } from "lucide-react";

export interface Program {
    icon: LucideIcon;
    title: string;
    description: string;
    cta: string;
    highlight: boolean;
}

// Note: The actual icon components will need to be imported in the component that uses this data
// This is just the data structure - icons will be mapped in the component
export const programsData = [
    {
        iconName: "BookOpen",
        title: "Programas de Mestrado",
        description: "Formação avançada em Biodiversidade, Ecologia e Conservação com componente prática intensiva.",
        cta: "Candidaturas Abertas",
        highlight: true,
    },
    {
        iconName: "Award",
        title: "Doutoramento",
        description: "Investigação de fronteira com supervisão de especialistas reconhecidos internacionalmente.",
        cta: "Saber Mais",
        highlight: false,
    },
    {
        iconName: "Users2",
        title: "Cursos de Verão",
        description: "Programas intensivos de campo e laboratório para estudantes e profissionais.",
        cta: "Ver Próximos Cursos",
        highlight: false,
    },
    {
        iconName: "Sparkles",
        title: "Workshops & Seminários",
        description: "Eventos regulares com investigadores convidados e apresentação de resultados.",
        cta: "Calendário",
        highlight: false,
    },
];
