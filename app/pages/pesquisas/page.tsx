"use client"

import Link from "next/link";
import Research from "@/components/Research";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PesquisasPage() {               
                                                    
  return (
    <div className="min-h-screen">
      {/* Hero  <section className="pt-32 pb-20 px-4 bg-muted bg-center bg-cover-fit bg-cover relative" style={{backgroundImage: `url(/imagem4.jpg)`}}>
        <div className="absolute inset-0 bg-black/40">
         <div className="container mx-auto max-w-6xl text-center relative z-10">
           <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">Investigação</h1>
         </div>
        </div>
      </section>*/}
      <section
        className="pt-32 pb-20 md:pt-16 px-4 bg-muted bg-cover bg-cover-fit bg-center relative"
        style={{ backgroundImage: `url(/imagem5.jpg)` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white fade-in">
            Investigação
            <span className="block text-white">Biodiversidade e Educação Ambiental</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Promovendo a investigação científica, conservação da biodiversidade no sudoeste de Angola
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
     

      {/* Linhas de Investigação */}
      <Research />

      {/* Produção Científica */}
      <section id="producao-cientifica" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#002059]">
                Produção Científica dos Investigadores
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-[#129DE4] to-[#14E259] mx-auto mb-4"></div>
              <p className="text-lg text-[#002059]/70">2022-2025</p>
            </motion.div>

            <div className="space-y-8">
              {/* Publicações */}
              <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 overflow-hidden group bg-white">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">João M.N. Silva</strong>, Alana K. Neves, Cremildo Riba Gouveia Dias, <strong className="text-[#14E259]">Jose João Tchamba</strong>, Luis Filipe Lopes, Manuel L. Campagnolo, and José Miguel Cardoso Pereira (2025). <em>Enhanced burnt area mapping across temperate and tropical regions with Landsat data and deep learning.</em> Book Chapter.
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Tchamba, J. J.</strong>, Catarino, L. (2021). Plantas silvestres alimentares colhidas na Huíla pelos Padres Antunes e Dekindt. In Catarino L, Pedro M (Eds) <em>Livro de Actas, 3º Encontro Nacional sobre Flora e Vegetação de Angola.</em> Centro de Botânica da UAN, Luanda, Angola. p. 159-168. ISBN 978-989-33-1518-7
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Tchamba, J.J</strong>; Silva, J.M.N.; Catarino, S.; Romeiras, M.M.; Duarte, M.C.; Catarino, L. (2023). Dados sobre plantas úteis recolhidos pelos primeiros missionários na Huíla, Angola - do passado ao presente. In: Romeiras, M.M.; Gomes, I.; Catarino, S.; Fortes, A.; Ferreira, V. & Duarte, M.C. (eds.) (2023). <em>Flora e Recursos Naturais das Ilhas de Cabo Verde.</em> Universidade de Cabo Verde e Universidade de Lisboa. ISAPress, Lisboa, pp.141-144.
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Tchamba, J. J.</strong>, & Camongua, J. (2019). As plantas-usos e costumes dos povos da província da Huíla, um estudo exploratório com Securidaca longipedunculata e Uapaca kirkiana. <em>Revista TransVersos</em>, (15), 417-432. <a href="https://doi.org/10.12957/transversos.2019.42163" target="_blank" rel="noopener noreferrer" className="text-[#129DE4] hover:underline">https://doi.org/10.12957/transversos.2019.42163</a>
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Tchamba, J. J.</strong> (2017). <em>Caracterização e cartografia da vegetação da região do Chipindo Província da Huíla-Angola</em> (Dissertação de mestrado, Universidade de Évora). <a href="http://hdl.handle.net/10174/21231" target="_blank" rel="noopener noreferrer" className="text-[#129DE4] hover:underline">http://hdl.handle.net/10174/21231</a>
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Chisingui, A. V.</strong>, Gonçalves, F. M., Tchamba, J. J., Camôngua Luís, J., Filomena F. Rafael, M., & Alexandre, J. L. (2018). Vegetation survey of the woodlands of Huíla Province. <em>Biodivers Ecol</em>, 6, 426-437. Article (PDF Available) in Biodiversity & Ecology 6(1613-9801):426-437 · April 2018. <a href="https://DOI: 10.7809/b-e.00355" target="_blank" rel="noopener noreferrer" className="text-[#129DE4] hover:underline">https://DOI: 10.7809/b-e.00355</a>
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Augustinho Kaquarta</strong>, <strong className="text-[#14E259]">Marina Filomena Francisco Rafael</strong> (2025). IMPORTÂNCIA DA VALIDAÇÃO DOS DADOS DE MAPEAMENTO COLABORATIVO PARA A COMUNIDADE YOUTHMAPPERS DA HUÍLA
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Marina Rafael</strong>, Valter Chisingui, Ana Cabral, Luís Catarino (2025). Integração da deteção remota e técnicas de campo na avaliação da degradação florestal no Parque Nacional do Bicuar.
                      </p>
                      
                      <p className="text-[#002059] leading-relaxed mb-4">
                        <strong className="text-[#14E259]">Marina Filomena Francisco Rafael</strong>, Luís Miguel Fazendeiro Catarino, António Valter Chisingui, Ana Isabel Rosa Cabral (2025). Principais factores de degradação florestal no parque nacional do bicuar como suporte à educação e sustentabilidade ambiental.
                      </p>
                    </div>
                      </div>
                    </CardContent>
                  </Card>

              {/* Bolseiros */}
              <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 overflow-hidden group bg-white">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-4 text-[#002059]">
                    Bolseiros e Participações
                  </h3>
                  <div className="space-y-3">
                    <p className="text-[#002059] leading-relaxed">
                      O CEBEA possui <strong className="text-[#14E259]">6 bolseiros</strong>, que participaram com apresentação de Posters no <strong className="text-[#14E259]">II Congresso do Ensino das Ciências</strong>, do ISCED-Huíla.
                    </p>
                    <p className="text-[#002059] leading-relaxed">
                      Estas bolsas estão enquadradas no projeto <strong className="text-[#14E259]">Bicuar Geo-Trees</strong>.
                    </p>
                      </div>
                    </CardContent>
                  </Card>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}


