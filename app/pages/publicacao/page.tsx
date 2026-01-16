'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Download,
  FileText,
  Layers,
  Tag,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto my-6"></div>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            A produção científica e técnica do CEBEA disponível para consulta. Explore artigos, relatórios, guias e dissertações com o
            apoio do nosso CMS.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary/80">
                {publicacoes.length} publicações encontradas
              </p>
              <p className="text-sm text-muted-foreground">
                Resultados encontrados.
              </p>
            </div>
            
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

            <div className="grid gap-6 md:grid-cols-2">
              {publicacoes.map((pub) => (
                <Card
                  key={pub.id}
                  className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#129DE4]/10">
                        {pub.tipo === "Artigo científico" ? (
                          <FileText className="h-6 w-6 text-[#129DE4]" />
                        ) : pub.tipo === "Livro" ? (
                          <BookOpen className="h-6 w-6 text-[#129DE4]" />
                        ) : (
                          <Layers className="h-6 w-6 text-[#129DE4]" />
                        )}
                      </span>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                            {pub.titulo}
                          </h3>
                          <span className="rounded-full bg-[#129DE4]/10 px-3 py-1 text-xs font-semibold uppercase text-[#129DE4]">
                            {pub.tipo}
                          </span>
                        </div>
                        <p className="text-sm text-[#002059]">
                          {pub.descricao}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[#002059]/70">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#129DE4]" />
                        {new Date(pub.data).toLocaleDateString("pt-PT")}
                      </span>
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#129DE4]" />
                        {pub.autor}
                      </span>
                      <span className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-[#129DE4]" />
                        {pub.etiqueta}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-[#129DE4]/10 bg-muted/30 px-6 py-4">
                    
                  </CardFooter>
                </Card>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
