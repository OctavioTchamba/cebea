import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Team from "@/components/Team";
import { 
  FlaskConical, 
  BookOpen, 
  GraduationCap, 
  Landmark, 
  Leaf, 
  TreePine, 
  Microscope, 
  Users, 
  Target,
  Globe,
  Shield,
  Lightbulb,
  Award,
  MapPin
} from "lucide-react";

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <section
        className="pt-32 pb-20 mt-20 px-4 bg-muted bg-cover bg-cover-fit bg-center relative"
        style={{ backgroundImage: `url(/imagem2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">
            Centro de Estudos de 
            <span className="block text-white">Biodiversidade e Educação Ambiental</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Promovendo a investigação científica, conservação da biodiversidade e educação ambiental em Angola
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>ISCED-Huíla, Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>Foco no Sudoeste de Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Excelência em Investigação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#002059]">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#002059] leading-relaxed">
                O <strong className="text-[#129DE4]">Centro de Estudos de Biodiversidade e Educação Ambiental (CEBEA)</strong> 
                é uma unidade de investigação científica integrada no Instituto Superior de Ciências da Educação da Huíla (ISCED-Huíla), 
                dedicada ao estudo, conservação e valorização da biodiversidade angolana.
              </p>
              
              <p className="text-lg text-[#002059] leading-relaxed">
                Com foco especial na região sudoeste de Angola, o CEBEA desenvolve investigação de excelência 
                em ecossistemas únicos, contribuindo para o conhecimento científico nacional e internacional 
                sobre a rica biodiversidade do país.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-[#129DE4]/10 rounded-lg border-2 border-transparent hover:border-[#14E259]/30 transition-all">
                  <Users className="h-8 w-8 text-[#129DE4] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#129DE4]">15+</div>
                  <div className="text-sm text-[#002059]">Investigadores</div>
                </div>
                <div className="text-center p-4 bg-[#14E259]/10 rounded-lg border-2 border-transparent hover:border-[#14E259]/30 transition-all">
                  <Award className="h-8 w-8 text-[#14E259] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#14E259]">50+</div>
                  <div className="text-sm text-[#002059]">Projetos</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center shrink-0">
                      <Target className="h-6 w-6 text-[#129DE4]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-[#14E259]">Nossa Missão</h3>
                      <p className="text-[#002059] leading-relaxed">
                        Promover a investigação científica sobre a biodiversidade angolana, 
                        contribuindo para a conservação e uso sustentável dos recursos naturais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-[#14E259]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-[#14E259]">Nossa Visão</h3>
                      <p className="text-[#002059] leading-relaxed">
                        Ser referência nacional e internacional em estudos de biodiversidade 
                        e educação ambiental, contribuindo para um futuro sustentável.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestruturas */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#002059]">
              Infraestruturas de Investigação
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-8"></div>
            <p className="text-lg text-[#002059] max-w-3xl mx-auto">
              O CEBEA dispõe de infraestruturas especializadas que suportam a investigação científica 
              e a conservação da biodiversidade angolana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-48">
                <Image src="/infra.jpeg" alt="Herbário LUBA" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 -mt-8 relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center backdrop-blur-sm bg-white/90">
                    <Landmark className="h-6 w-6 text-[#129DE4]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#14E259]">Herbário LUBA</h3>
                </div>
                <p className="text-[#002059] leading-relaxed mb-4">
                  Coleções botânicas locais, nacionais e internacionais, apoiando a
                  investigação florística e a conservação da flora angolana.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • 20.000+ espécimes catalogados<br/>
                  • Coleções de referência regional<br/>
                  • Apoio à taxonomia vegetal
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-48">
                <Image src="/microscope.jpeg" alt="Museu de Zoologia" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 -mt-8 relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center backdrop-blur-sm bg-white/90">
                    <Microscope className="h-6 w-6 text-[#14E259]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#14E259]">Museu de Zoologia</h3>
                </div>
                <p className="text-[#002059] leading-relaxed mb-4">
                  Acervo zoológico com coleções representativas de Angola e do
                  exterior, fomentando estudos taxonômicos e ecológicos.
                </p>
                <div className="text-sm text-[#14E259] font-medium">
                  • Coleções de vertebrados e invertebrados<br/>
                  • Espécimes únicos da região<br/>
                  • Laboratório de taxonomia
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-48">
                <Image src="/ecology.jpeg" alt="Laboratório de Ecologia" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 -mt-8 relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center backdrop-blur-sm bg-white/90">
                    <TreePine className="h-6 w-6 text-[#129DE4]" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[#14E259]">Laboratório de Ecologia</h3>
                </div>
                <p className="text-[#002059] leading-relaxed mb-4">
                  Instalações modernas para estudos ecológicos e de conservação,
                  incluindo equipamentos de análise ambiental.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • Análise de solos e água<br/>
                  • Estudos de biodiversidade<br/>
                  • Monitoramento ambiental
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipa */}
      <Team />

      {/* Objetivos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance text-[#002059]">
              Nossos Objetivos Estratégicos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-8"></div>
            <p className="text-lg text-[#002059] text-pretty leading-relaxed">
              As diretrizes fundamentais que orientam a atuação do CEBEA na promoção da biodiversidade 
              e educação ambiental em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/investig.jpeg" alt="Investigação Científica" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center group-hover:bg-[#129DE4]/20 transition-colors -mt-8 relative z-10">
                  <FlaskConical className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Investigação Científica
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Desenvolver investigação científica de excelência sobre recursos biológicos, 
                  ecossistemas e biodiversidade de Angola, com foco especial no sudoeste do país.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • Estudos taxonômicos<br/>
                  • Análise ecológica<br/>
                  • Conservação de espécies
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/welwi.jpeg" alt="Informação e Documentação" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center group-hover:bg-[#14E259]/20 transition-colors -mt-8 relative z-10">
                  <BookOpen className="h-6 w-6 text-[#14E259]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Informação e Documentação
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Criar e manter um sistema abrangente de informação e documentação 
                  da diversidade biológica angolana, facilitando o acesso ao conhecimento.
                </p>
                <div className="text-sm text-[#14E259] font-medium">
                  • Base de dados científica<br/>
                  • Publicações especializadas<br/>
                  • Arquivo digital
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/env-edu.jpeg" alt="Educação Ambiental" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center group-hover:bg-[#14E259]/20 transition-colors -mt-8 relative z-10">
                  <GraduationCap className="h-6 w-6 text-[#14E259]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Educação Ambiental
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Promover a educação ambiental e valorização do património natural e cultural, 
                  sensibilizando a comunidade para a conservação da biodiversidade.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • Programas educativos<br/>
                  • Workshops e palestras<br/>
                  • Sensibilização comunitária
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/conservacy.jpeg" alt="Conservação" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center group-hover:bg-[#129DE4]/20 transition-colors -mt-8 relative z-10">
                  <Shield className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Conservação
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Contribuir para a conservação da biodiversidade através de estudos 
                  de impacto, monitoramento e propostas de gestão sustentável.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • Planos de conservação<br/>
                  • Monitoramento ambiental<br/>
                  • Gestão sustentável
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/formacao.jpeg" alt="Formação" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center group-hover:bg-[#14E259]/20 transition-colors -mt-8 relative z-10">
                  <GraduationCap className="h-6 w-6 text-[#14E259]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Formação
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Desenvolver competências técnicas e científicas em biodiversidade 
                  e educação ambiental, formando profissionais qualificados.
                </p>
                <div className="text-sm text-[#14E259] font-medium">
                  • Cursos especializados<br/>
                  • Estágios de investigação<br/>
                  • Capacitação técnica
                </div>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group bg-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
              <div className="relative h-40">
                <Image src="/equipa.jpeg" alt="Cooperação" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center group-hover:bg-[#129DE4]/20 transition-colors -mt-8 relative z-10">
                  <Globe className="h-6 w-6 text-[#129DE4]" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#14E259]">
                  Cooperação
                </h3>
                <p className="text-[#002059] leading-relaxed">
                  Estabelecer parcerias nacionais e internacionais para fortalecer 
                  a investigação e promover o intercâmbio científico.
                </p>
                <div className="text-sm text-[#129DE4] font-medium">
                  • Colaborações internacionais<br/>
                  • Redes de investigação<br/>
                  • Intercâmbio científico
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}