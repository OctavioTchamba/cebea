export interface News {
    id: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    link: string;
}

export const noticias: News[] = [
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
