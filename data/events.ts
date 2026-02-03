export interface Event {
    id: string;
    title: string;
    date: string;
    location: string;
    category: string;
    description: string;
    link: string;
}

export const eventos: Event[] = [
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
