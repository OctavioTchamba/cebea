'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Download,
  FileText,
  Layers,
  Tag,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

type Publicacao ={
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  autor: string;
  etiqueta: string;
};
  



export default function PublicacoesPage() {
const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
const [error, setError]= useState("")
const [loading, setIsLoading]=useState(false)
const sectionRef = useRef(null);
const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

useEffect(()=>{
  fetchPublicacoes();
},[])

const fetchPublicacoes = async ()=>{
  setIsLoading(true)
  try {
    const post = await fetch("/api/publicacoes")
    if(!post.ok) throw new Error("erro ao carregar pubs")
    const data = await post.json();
   
    setPublicacoes(data.publicacoes || [])
   
   
  } catch (error: any) {
    setError(error.message || "erro ao carregar publicação")
    console.error(error)
  } finally{
    setIsLoading(false)
  }
}
  
  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20" style={{ backgroundImage: `url(/imagem5.jpg)` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-4 text-white">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-white">
            Publicações
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-[#129DE4] to-[#14E259] mx-auto my-6"></div>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            A produção científica e técnica do CEBEA disponível para consulta. Explore artigos, relatórios, guias e dissertações com o
            apoio do nosso CMS.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
            
          </div>
          {loading && 
             (
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
                </div>
              </div>
            
          )}

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
              <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
            </div>
          )}

          {publicacoes.length === 0 && !error && (
            <div className="mb-6 rounded-lg bg-gray-50 dark:bg-gray-800 p-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nenhuma publicação encontrada.
              </p>
            </div>
          )}
          
        <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary/80">
                
                  {publicacoes.length} publicações encontradas
             
                <p className="text-sm text-muted-foreground">
                  Resultados encontrados.
                </p>
                </p>
            </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 ">
          {/* Publications - Left Column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <FileText className="w-5 h-5 text-[#14E259]" />
              <h3 className="font-display text-xl font-semibold">Publicações Recentes</h3>
            </motion.div>

            {publicacoes.map((pub, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 card-hover group cursor-pointer relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <Link href={`/pages/publicacao/${pub.id}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 rounded-md bg-[#14E259]/10 text-[#14E259] text-xs font-medium">
                          {pub.tipo}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {pub.data}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-medium mb-2 group-hover:text-[#14E259] transition-colors line-clamp-2">
                        {pub.titulo}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pub.autor}
                      </p>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-foreground/80">{pub.descricao}</span>
                        <span className="text-[#14E259] font-medium">IF: {pub.etiqueta}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-[#14E259] transition-colors shrink-0" />
                  </div>
                </Link>
              </motion.article>
            ))}

          
          </div>

            
        </div>
        </section>
        </div>
    
  );
}