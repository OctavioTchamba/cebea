"use client"

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";

const noticiasData: Record<string, any> = {
  "parceria-museu": {
    title: "Nova parceria com o Museu de História Natural de Angola",
    date: "05 Março 2025",
    category: "Parcerias",
    summary: "Acordo de cooperação técnica para intercâmbio de coleções, formação de curadores e projetos conjuntos de investigação.",
    content: "O CEBEA estabeleceu uma nova parceria estratégica com o Museu de História Natural de Angola, marcando um importante passo no fortalecimento da investigação científica nacional. Este acordo abrange múltiplas áreas de cooperação, incluindo o intercâmbio de coleções científicas, programas de formação para curadores e o desenvolvimento conjunto de projetos de investigação em biodiversidade.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&q=80",
    fullContent: [
      "O acordo prevê o intercâmbio regular de espécimes entre as coleções do CEBEA e do Museu de História Natural, permitindo o enriquecimento mútuo dos acervos científicos.",
      "Serão desenvolvidos programas de formação específicos para curadores de coleções botânicas e zoológicas, com workshops e estágios práticos.",
      "O projeto conjunto 'Biodiversidade de Angola: Inventário e Conservação' será uma das primeiras iniciativas a ser implementada.",
      "Esta parceria representa um marco importante na colaboração institucional para a conservação da biodiversidade angolana."
    ]
  },
  "anfibio-endemico": {
    title: "Descoberto novo anfíbio endémico nas serras da Huíla",
    date: "21 Fevereiro 2025",
    category: "Descobertas",
    summary: "Equipa de Zoologia identifica espécie inédita de anfíbio através de missões de campo e análises genéticas.",
    content: "Uma equipa de investigadores do CEBEA identificou uma nova espécie de anfíbio endémico das serras da província da Huíla. A descoberta resulta de trabalho extensivo de campo e análises genéticas detalhadas, representando um importante contributo para o conhecimento da biodiversidade angolana.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    fullContent: [
      "A nova espécie foi descoberta durante uma missão científica nas serras da Huíla, uma região ainda pouco explorada cientificamente.",
      "Análises genéticas confirmaram que se trata de uma espécie completamente nova para a ciência, pertencente a um gênero endêmico da região.",
      "A descoberta destaca a importância de continuar a explorar a biodiversidade angolana, especialmente em áreas montanhosas pouco acessíveis.",
      "O artigo científico descrevendo a nova espécie será publicado em breve em revista internacional especializada."
    ]
  },
  "lancamento-cms": {
    title: "Lançamento do novo CMS do CEBEA",
    date: "15 Dezembro 2024",
    category: "Tecnologia",
    summary: "Plataforma centralizada que integra notícias, publicações, eventos e dados de investigação do centro.",
    content: "O CEBEA lançou oficialmente o seu novo sistema de gestão de conteúdos (CMS), uma plataforma inovadora que centraliza todas as informações do centro. O sistema permite a gestão integrada de notícias, publicações científicas, eventos e dados de investigação.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
    fullContent: [
      "O novo CMS oferece uma interface moderna e intuitiva para a gestão de conteúdos científicos.",
      "Integra múltiplas funcionalidades, incluindo gestão de publicações, eventos, notícias e dados de investigação.",
      "A plataforma facilita o acesso público às informações do centro, promovendo a transparência e o acesso ao conhecimento.",
      "O sistema foi desenvolvido com tecnologias modernas, garantindo performance e segurança dos dados."
    ]
  }
};

export default function NoticiaDetalhes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const noticia = noticiasData[slug];

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={noticia.image}
            alt={noticia.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <Link href="/pages/noticias">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10 hover:text-white border-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Notícias
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14E259]/20 backdrop-blur-sm border border-[#14E259]/30">
              <Tag className="w-4 h-4 text-[#14E259]" />
              <span className="text-sm font-medium text-[#14E259]">{noticia.category}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {noticia.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#14E259]" />
                <span>{noticia.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-[#14E259]" />
                <span>Notícia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-[#002059] leading-relaxed font-medium">
                {noticia.summary}
              </p>

              <p className="text-lg text-[#002059] leading-relaxed">
                {noticia.content}
              </p>

              {noticia.fullContent && (
                <div className="space-y-4">
                  {noticia.fullContent.map((paragraph: string, index: number) => (
                    <p key={index} className="text-[#002059] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Related News */}
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 bg-white mt-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-[#14E259] mb-4">
                  Notícias Relacionadas
                </h3>
                <Link href="/pages/noticias" className="inline-flex items-center gap-2 text-[#129DE4] hover:text-[#0d8bc7] transition-colors">
                  Ver todas as notícias
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
