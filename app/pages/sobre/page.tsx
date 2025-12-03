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
        className="pt-32 pb-20 px-4 bg-muted bg-cover bg-cover-fit bg-center relative"
        style={{ backgroundImage: `url(/imagem2.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">
            Centro de Estudos de 
            <span className="block nature-gradient-text">Biodiversidade e Educação Ambiental</span>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-accent mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O <strong className="text-primary">Centro de Estudos de Biodiversidade e Educação Ambiental (CEBEA)</strong> 
                é uma unidade de investigação científica integrada no Instituto Superior de Ciências da Educação da Huíla (ISCED-Huíla), 
                dedicada ao estudo, conservação e valorização da biodiversidade angolana.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com foco especial na região sudoeste de Angola, o CEBEA desenvolve investigação de excelência 
                em ecossistemas únicos, contribuindo para o conhecimento científico nacional e internacional 
                sobre a rica biodiversidade do país.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Investigadores</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">Nossa Missão</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Promover a investigação científica sobre a biodiversidade angolana, 
                        contribuindo para a conservação e uso sustentável dos recursos naturais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Lightbulb className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">Nossa Visão</h3>
                      <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Infraestruturas de Investigação
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O CEBEA dispõe de infraestruturas especializadas que suportam a investigação científica 
              e a conservação da biodiversidade angolana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Herbário LUBA</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coleções botânicas locais, nacionais e internacionais, apoiando a
                  investigação florística e a conservação da flora angolana.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 5.000+ espécimes catalogados<br/>
                  • Coleções de referência regional<br/>
                  • Apoio à taxonomia vegetal
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Museu de Zoologia</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Acervo zoológico com coleções representativas de Angola e do
                  exterior, fomentando estudos taxonômicos e ecológicos.
                </p>
                <div className="text-sm text-accent font-medium">
                  • Coleções de vertebrados e invertebrados<br/>
                  • Espécimes únicos da região<br/>
                  • Laboratório de taxonomia
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">Laboratório de Ecologia</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Instalações modernas para estudos ecológicos e de conservação,
                  incluindo equipamentos de análise ambiental.
                </p>
                <div className="text-sm text-secondary font-medium">
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance">
              Nossos Objetivos Estratégicos
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              As diretrizes fundamentais que orientam a atuação do CEBEA na promoção da biodiversidade 
              e educação ambiental em Angola.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Investigação Científica
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolver investigação científica de excelência sobre recursos biológicos, 
                  ecossistemas e biodiversidade de Angola, com foco especial no sudoeste do país.
                </p>
                <div className="text-sm text-primary font-medium">
                  • Estudos taxonômicos<br/>
                  • Análise ecológica<br/>
                  • Conservação de espécies
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Informação e Documentação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Criar e manter um sistema abrangente de informação e documentação 
                  da diversidade biológica angolana, facilitando o acesso ao conhecimento.
                </p>
                <div className="text-sm text-accent font-medium">
                  • Base de dados científica<br/>
                  • Publicações especializadas<br/>
                  • Arquivo digital
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Educação Ambiental
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Promover a educação ambiental e valorização do património natural e cultural, 
                  sensibilizando a comunidade para a conservação da biodiversidade.
                </p>
                <div className="text-sm text-secondary font-medium">
                  • Programas educativos<br/>
                  • Workshops e palestras<br/>
                  • Sensibilização comunitária
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Conservação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contribuir para a conservação da biodiversidade através de estudos 
                  de impacto, monitoramento e propostas de gestão sustentável.
                </p>
                <div className="text-sm text-primary font-medium">
                  • Planos de conservação<br/>
                  • Monitoramento ambiental<br/>
                  • Gestão sustentável
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Formação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolver competências técnicas e científicas em biodiversidade 
                  e educação ambiental, formando profissionais qualificados.
                </p>
                <div className="text-sm text-accent font-medium">
                  • Cursos especializados<br/>
                  • Estágios de investigação<br/>
                  • Capacitação técnica
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">
                  Cooperação
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Estabelecer parcerias nacionais e internacionais para fortalecer 
                  a investigação e promover o intercâmbio científico.
                </p>
                <div className="text-sm text-secondary font-medium">
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