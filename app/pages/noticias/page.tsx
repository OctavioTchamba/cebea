'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Globe2,
  MapPin,
  Megaphone,
  Newspaper,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import api from "@/service/api";

type Noticia = {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  link: string;
  rawDate?: string;
};

type Evento = {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  link: string;
  rawDate?: string;
};

const formatDate = (value?: string | null) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatRange = (start?: string | null, end?: string | null) => {
  if (!start) return "-";
  if (!end) return formatDate(start);
  return `${formatDate(start)} - ${formatDate(end)}`;
};

export default function NoticiasEventosPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const [newsRes, eventsRes, workshopsRes] = await Promise.all([
          api.get("/news"),
          api.get("/events"),
          api.get("/workshops"),
        ]);

        const rawNews = Array.isArray(newsRes.data)
          ? newsRes.data
          : newsRes.data?.news || newsRes.data || [];
        const rawEvents = Array.isArray(eventsRes.data)
          ? eventsRes.data
          : eventsRes.data?.events || eventsRes.data || [];
        const rawWorkshops = Array.isArray(workshopsRes.data)
          ? workshopsRes.data
          : workshopsRes.data?.workshops || workshopsRes.data || [];

        const mappedNews: Noticia[] = rawNews
          .filter((item: any) => item?.published !== false)
          .map((item: any) => {
            const date = item.publishedAt || item.createdAt || item.date;
            return {
              id: String(item.id),
              title: item.title || "",
              date: formatDate(date),
              category: item.category || "Not?cia",
              summary: item.summary || item.content?.slice(0, 160) || "",
              link: `/pages/noticias/${item.id}`,
              rawDate: date || "",
            };
          });

        const mappedEvents: Evento[] = rawEvents
          .filter((item: any) => item?.published !== false)
          .map((item: any) => ({
            id: String(item.id),
            title: item.title || "",
            date: formatRange(item.startDate, item.endDate),
            location: item.location || "Online",
            category: item.category || "Evento",
            description: item.description || "",
            link: `/pages/eventos/${item.id}`,
            rawDate: item.startDate || item.createdAt || "",
          }));

        const mappedWorkshops: Evento[] = rawWorkshops
          .filter((item: any) => item?.published !== false)
          .map((item: any) => ({
            id: String(item.id),
            title: item.title || "",
            date: formatRange(item.startDate, item.endDate),
            location: item.location || "Online",
            category: "Workshop",
            description: item.description || "",
            link: `/pages/eventos/${item.id}`,
            rawDate: item.startDate || item.createdAt || "",
          }));

        const mergedEvents = [...mappedEvents, ...mappedWorkshops].sort((a, b) => {
          const aTime = a.rawDate ? new Date(a.rawDate).getTime() : 0;
          const bTime = b.rawDate ? new Date(b.rawDate).getTime() : 0;
          return bTime - aTime;
        });

        setNoticias(mappedNews);
        setEventos(mergedEvents);
      } catch (err: any) {
        console.error(err);
        setError(err?.message || "Erro ao carregar conte?dos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-24 pt-32 md:pt-20"
        style={{ backgroundImage: `url(/imagem4.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-4 text-white">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-white">
            Not?cias e Eventos
          </h1>
          <p className="text-lg leading-relaxed text-white/85 md:text-xl">
            Atualiza??es do CEBEA: novas parcerias, descobertas cient?ficas, iniciativas com a comunidade e agenda de eventos ligados ao CMS.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              <Newspaper className="h-4 w-4" />
              Atualizado semanalmente via CMS
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              <Globe2 className="h-4 w-4" />
              Cobertura regional e nacional
            </span>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
                Últimas notícias
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                Conteudo sobre a atividade do CEBEA
              </p>
            </div>
           
          </div>

          {loading && (
            <div className="min-h-[30vh] flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#129DE4] mx-auto"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando...</p>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
              <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && noticias.length === 0 && (
            <div className="mb-6 rounded-lg bg-gray-50 dark:bg-gray-800 p-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nenhuma not?cia encontrada.
              </p>
            </div>
          )}

          {!loading && noticias.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {noticias.map((noticia) => (
                <Card
                  key={noticia.id}
                  className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full bg-[#129DE4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#129DE4]">
                        {noticia.category}
                      </span>
                      <span className="flex items-center gap-2 text-xs font-medium uppercase text-[#002059]/70">
                        <Calendar className="h-4 w-4 text-[#129DE4]" />
                        {noticia.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      {noticia.title}
                    </h3>
                    <p className="text-sm text-[#002059]">
                      {noticia.summary}
                    </p>
                  </CardContent>
                  <CardFooter className="border-t border-[#129DE4]/10 bg-muted/30 px-6 py-4">
                    <Link
                      href={noticia.link}
                      className="flex items-center gap-2 text-sm font-semibold text-[#129DE4] transition-colors hover:text-[#0d8bc7]"
                    >
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
                Eventos e workshops
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">
                Datas, locais e descrições das próximas atividades abertas ao público e parceiros.
              </p>
            </div>
           
          </div>

          {!loading && !error && eventos.length === 0 && (
            <div className="mb-6 rounded-lg bg-gray-50 dark:bg-gray-800 p-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nenhum evento ou workshop encontrado.
              </p>
            </div>
          )}

          {!loading && eventos.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {eventos.map((evento) => (
                <Card
                  key={evento.id}
                  className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#129DE4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#129DE4]">
                        {evento.category}
                      </span>
                      <span className="flex items-center gap-2 text-xs font-medium uppercase text-[#002059]/70">
                        <Calendar className="h-4 w-4 text-[#129DE4]" />
                        {evento.date}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                      {evento.title}
                    </h3>
                    <p className="text-sm text-[#002059]">
                      {evento.description}
                    </p>
                    <span className="flex items-center gap-2 text-sm font-semibold text-[#129DE4]">
                      <MapPin className="h-4 w-4" />
                      {evento.location}
                    </span>
                  </CardContent>
                  <CardFooter className="border-t border-[#129DE4]/10 bg-background px-6 py-4">
                    <Link
                      href={evento.link}
                      className="flex items-center gap-2 text-sm font-semibold text-[#129DE4] transition-colors hover:text-[#0d8bc7]"
                    >
                      Detalhes 
                      <Megaphone className="h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
