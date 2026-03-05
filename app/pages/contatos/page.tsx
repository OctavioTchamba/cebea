"use client";

import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactos = [
  {
    title: "Email institucional",
    value: "herbario.museu@isced-huila.ed.ao",
    icon: Mail,
  },
  {
    title: "Telefone",
    value: "+244 940 729 322",
    icon: Phone,
  },
  {
    title: "Endereço",
    value: "Rua Sarmento Rodrigues, nº02 Lubango, Huíla.",
    icon: MapPin,
  },
  {
    title: "Horário de atendimento",
    value: "Seg a Sex • 08h00 às 17h00",
    icon: Clock,
  },
];

const redesSociais = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/cebea",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/cebea",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/cebea",
  },
];

export default function Contatos() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const assunto = (form.elements.namedItem("assunto") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;

    const body = `Nome: ${nome}\nEmail de contacto: ${email}\n\n${mensagem}`;

    window.location.href = `mailto:herbario.museu@isced-huila.ed.ao?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-28 mt-20 pt-32 md:pt-20"
        style={{ backgroundImage: `url(/hero-biodiversity.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto max-w-5xl space-y-6 text-center text-white">
          <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl text-white">
            Contactos
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
            Fale connosco para saber mais sobre projetos, parcerias, inscrições
            em eventos ou visitas ao Centro de Estudos de Biodiversidade e
            Educação Ambiental.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl text-[#002059]">
              Informações de contacto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
            <p className="text-[#002059]">
              A nossa equipa está disponível para esclarecer dúvidas, agendar
              visitas técnicas, apoiar candidatos a formações e receber propostas
              de colaboração.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {contactos.map(({ title, value, icon: Icon }) => (
                <Card
                  key={title}
                  className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#129DE4]/10">
                      <Icon className="h-6 w-6 text-[#129DE4]" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase text-[#002059]/70">
                        {title}
                      </p>
                      <p className="text-base font-medium text-[#002059]">
                        {value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase text-muted-foreground">
                Siga o CEBEA nas redes
              </p>
              <div className="flex flex-wrap gap-3">
                {redesSociais.map(({ name, icon: Icon, href }) => (
                  <Button
                    key={name}
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-[#129DE4]/30 text-[#129DE4] hover:bg-[#129DE4]/10"
                  >
                    <Link href={href} target="_blank" rel="noreferrer">
                      <Icon className="mr-2 h-4 w-4" />
                      {name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-semibold text-[#14E259]">
                  Envie a sua mensagem
                </h2>
                <p className="mb-6 text-sm text-[#002059]">
                  Ao clicar em enviar, o seu cliente de email será aberto com a
                  mensagem pronta a enviar.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-2 block text-sm font-medium text-[#002059]"
                    >
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      className="w-full rounded-lg border border-[#129DE4]/20 bg-background px-4 py-2 text-sm text-[#002059] focus:border-[#129DE4] focus:outline-none focus:ring-2 focus:ring-[#129DE4]/30"
                      placeholder="O seu nome completo"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#002059]"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-lg border border-[#129DE4]/20 bg-background px-4 py-2 text-sm text-[#002059] focus:border-[#129DE4] focus:outline-none focus:ring-2 focus:ring-[#129DE4]/30"
                        placeholder="nome@instituicao.ao"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="assunto"
                        className="mb-2 block text-sm font-medium text-[#002059]"
                      >
                        Assunto
                      </label>
                      <input
                        id="assunto"
                        name="assunto"
                        type="text"
                        required
                        className="w-full rounded-lg border border-[#129DE4]/20 bg-background px-4 py-2 text-sm text-[#002059] focus:border-[#129DE4] focus:outline-none focus:ring-2 focus:ring-[#129DE4]/30"
                        placeholder="Ex.: Parcerias, Formação, Investigação"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="mb-2 block text-sm font-medium text-[#002059]"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-[#129DE4]/20 bg-background px-4 py-2 text-sm text-[#002059] focus:border-[#129DE4] focus:outline-none focus:ring-2 focus:ring-[#129DE4]/30"
                      placeholder="Descreva a sua necessidade ou questão..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#129DE4] hover:bg-[#0d8bc7] text-white"
                  >
                    Enviar mensagem
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-primary/15 shadow-lg">
              <iframe
                title="Localização CEBEA — Lubango, Huíla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31729.5!2d13.4833!3d-14.9177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1906f4d0b1e2e2e3%3A0x1a2b3c4d5e6f7a8b!2sLubango%2C+Hu%C3%ADla%2C+Angola!5e0!3m2!1spt-PT!2sao!4v1700000000000!5m2!1spt-PT!2sao"
                className="h-[420px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <CardContent className="space-y-4 p-6">
                <h3 className="font-heading text-2xl font-semibold text-[#14E259]">
                  Newsletter / Subscrição
                </h3>
                <p className="text-[#002059]">
                  Receba notícias, publicações e convites para eventos diretamente
                  no seu email.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="O seu email"
                    className="w-full rounded-lg border border-[#129DE4]/30 bg-background px-4 py-2 text-sm text-[#002059] focus:border-[#129DE4] focus:outline-none focus:ring-2 focus:ring-[#129DE4]/30"
                  />
                  <Button
                    className="w-full bg-[#129DE4] hover:bg-[#0d8bc7] text-white"
                    type="submit"
                  >
                    Subscrever
                  </Button>
                  <p className="text-xs text-[#002059]/70">
                    Pode cancelar a subscrição quando desejar. Respeitamos a sua
                    privacidade.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}