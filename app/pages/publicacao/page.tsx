'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import api from "@/service/api";

type Publicacao = {
  id: string;
  titulo: string;
  tipo: string;
  descricao: string;
  data: string;
  autor: string;
  etiqueta: string;
};

const formatDate = (value?: string | number | null) => {
  if (!value) return "-";
  // Se for apenas o ano (ex: 2024)
  if (typeof value === "number" || (typeof value === "string" && value.length === 4)) return String(value);
  
  const date = new Date(value);
  if (isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export default function PublicacoesPage() {
  const [publicacoes, setPublicacoes] = useState<Publicacao[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    fetchPublicacoes();
  }, []);

  const fetchPublicacoes = async () => {
    setLoading(true);
    try {
      const res = await api.get("/publications");
      const items = Array.isArray(res.data) ? res.data : res.data?.publications || [];

      const mapped = items
        .filter((item: any) => item?.published !== false)
        .map((item: any) => ({
          id: String(item.id),
          titulo: item.title || "Sem título",
          tipo: item.type || "Publicação",
          descricao: item.description || "Sem descrição disponível.",
          data: formatDate(item.year || item.createdAt),
          autor: item.authors || "Autor não especificado",
          etiqueta: item.theme || "",
        }));

      setPublicacoes(mapped);
    } catch (err: any) {
      setError("Não foi possível carregar as publicações.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-slate-900 px-4 pb-24 pt-32 md:pt-20 bg-cover bg-center" style={{ backgroundImage: `url(/imagem5.jpg)` }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-4 text-white text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Publicações</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto my-6"></div>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            Explore a produção científica e técnica do CEBEA.
          </p>
        </div>
      </section>

      {publicacoes.length === 0 && !loading && !error && (
        <div className="p-4 bg-yellow-50 text-yellow-700 rounded-lg text-center mt-10">
          sem publicações
        </div>
      )}

      <section className="py-20 container mx-auto max-w-6xl px-4" ref={sectionRef}>
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#129DE4]"> </div>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center">{error}</div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {publicacoes.map((pub, index) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#129DE4] bg-[#129DE4]/10 px-2 py-1 rounded">
                      {pub.tipo}
                    </span>
                    <span className="text-xs text-gray-400">{pub.data}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#129DE4] transition-colors line-clamp-2">
                    {pub.titulo}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow">
                    {pub.descricao}
                  </p>

                  <Link 
                    href={`/pages/publicacao/${pub.id}`}
                    className="flex items-center gap-2 text-sm font-bold text-[#14E259] hover:gap-3 transition-all"
                  >
                    Saber mais <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}