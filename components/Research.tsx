"use client";

import { FlaskConical, Leaf, Microscope, Sprout } from "lucide-react";
import Link from "next/link";
import React from "react";

type ResearchItem = {
  id: string;
  title: string;
  description: string;
  period?: string;
  href?: string;
  icon?: React.ReactNode;
};

type ResearchProps = {
  title?: string;
  subtitle?: string;
  items?: ResearchItem[];
  className?: string;
};

const defaultItems: ResearchItem[] = [
  {
    id: "bio",
    title: "Biodiversidade e Conservação",
    description:
      "Inventários, monitorização e modelação para proteger espécies e habitats prioritários.",
    period: "Contínuo",
    icon: <Leaf className="h-4 w-4 text-primary" />,
  },
  {
    id: "eco",
    title: "Ecologia de Ecossistemas",
    description:
      "Dinâmica de florestas, serviços ecossistémicos e interações bióticas sob alterações climáticas.",
    period: "2023–2026",
    icon: <Sprout className="h-4 w-4 text-primary" />,
  },
  {
    id: "lab",
    title: "Ciência Aplicada e Laboratorial",
    description:
      "Genética, microbiologia e química ambiental para soluções baseadas em evidências.",
    period: "2024–2027",
    icon: <Microscope className="h-4 w-4 text-primary" />,
  },
  {
    id: "transf",
    title: "Transferência de Conhecimento",
    description:
      "Do laboratório ao território: políticas públicas, capacitação e impacto social.",
    period: "Contínuo",
    icon: <FlaskConical className="h-4 w-4 text-primary" />,
  },
];

export default function Research({
  title = "Linhas de Investigação",
  subtitle = "As nossas investigações alinhadas numa linha vertical",
  items = defaultItems,
  className,
}: ResearchProps) {
  return (
    <section className={"section-padding " + (className ?? "")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance text-[#002059]">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-[#002059] text-pretty">{subtitle}</p>
          ) : null}
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-[#14E259] md:left-1/2 md:-translate-x-1/2" />

          <ol className="space-y-10">
            {items.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <li key={item.id} className="relative">
                  {/* Dot marker */}
                  <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-6 h-3 w-3 rounded-full bg-[#129DE4] ring-4 ring-[#129DE4]/15" />

                  <div className="grid md:grid-cols-2 md:gap-8 items-start">
                    {isEven ? (
                      <>
                        <div className="hidden md:block" />
                        <div className="col-span-1 ml-10 md:ml-0 md:pl-10">
                          <div className="relative rounded-xl border-2 border-transparent hover:border-[#14E259]/30 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                            <div className="flex items-start gap-3">
                              {item.icon ? (
                                <div className="mt-0.5 h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#129DE4]/10">
                                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-4 w-4 text-[#129DE4]" })}
                                </div>
                              ) : null}
                              <div className="space-y-1">
                                <h3 className="font-heading text-lg md:text-xl font-semibold text-[#14E259]">
                                  {item.title}
                                </h3>
                                {item.period ? (
                                  <p className="text-xs uppercase tracking-wide text-[#002059]/70">
                                    {item.period}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <p className="mt-3 text-sm md:text-base text-[#002059] leading-relaxed">
                              {item.description}
                            </p>
                            {item.href ? (
                              <div className="mt-4">
                                <Link
                                  href={item.href}
                                  className="inline-flex text-sm font-medium text-[#129DE4] hover:text-[#0d8bc7] hover:underline"
                                >
                                  Saber mais
                                </Link>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-span-1 ml-10 md:ml-0 md:pr-10">
                          <div className="relative rounded-xl border-2 border-transparent hover:border-[#14E259]/30 bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                            <div className="flex items-start gap-3">
                              {item.icon ? (
                                <div className="mt-0.5 h-8 w-8 inline-flex items-center justify-center rounded-lg bg-[#129DE4]/10">
                                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-4 w-4 text-[#129DE4]" })}
                                </div>
                              ) : null}
                              <div className="space-y-1">
                                <h3 className="font-heading text-lg md:text-xl font-semibold text-[#14E259]">
                                  {item.title}
                                </h3>
                                {item.period ? (
                                  <p className="text-xs uppercase tracking-wide text-[#002059]/70">
                                    {item.period}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <p className="mt-3 text-sm md:text-base text-[#002059] leading-relaxed">
                              {item.description}
                            </p>
                            {item.href ? (
                              <div className="mt-4">
                                <Link
                                  href={item.href}
                                  className="inline-flex text-sm font-medium text-[#129DE4] hover:text-[#0d8bc7] hover:underline"
                                >
                                  Saber mais
                                </Link>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="hidden md:block" />
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
