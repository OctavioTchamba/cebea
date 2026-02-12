"use client";

import About from "@/components/About";
import Missions from "@/components/Mission";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentNews from "@/components/RecentNews";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope } from "lucide-react";
import Objetives from "@/components/Objetivos";
import Link from "next/link";
import Research from "@/components/Research";
import LightRays from "@/components/LightRays";
import ImpactStats from "@/components/ImpactStats";
import useEmblaCarousel from "embla-carousel-react";
 import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";


export default function HomePage(){

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    
    
    
   
    
    
  }, [Autoplay({delay: 2000, stopOnInteraction: false})]);
  return(
    <div className="min-h-screen">
      <div className="absolute inset-0 top-0 ">
      <LightRays
    raysOrigin="top-center"
    raysColor="#fdd212ab"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
        </div>  
      {/**Hero Section */}
       {/* Hero Section com Carousel */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 ">
        
        {/* Carousel de Imagens */}
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {/* Slide 1 */}
            <div className="flex-[0_0_100%] min-w-0 relative">
              <Image 
                src="/hero-forest.jpg" 
                alt="Hero Forest" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#002059]/70 to-[#002059]/70" />
            </div>

            {/* Slide 2 */}
            <div className="flex-[0_0_100%] min-w-0 relative">
              <Image 
                src="/Imagem2.jpg" 
                alt="Imagem 2" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#002059]/70 to-[#002059]/70" />
            </div>

                {/* Slide 4 */}
                <div className="flex-[0_0_100%] min-w-0 relative">
              <Image 
                src="/hero-biodiversity.jpg" 
                alt="Imagem 4" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#002059]/70 to-[#002059]/70" />
            </div>

            {/* Slide 3 */}
            <div className="flex-[0_0_100%] min-w-0 relative">
              <Image 
                src="/Imagem4.jpg" 
                alt="Imagem 4" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-[#002059]/70 to-[#002059]/70" />
            </div>
          </div>
         
        </div>

        {/* Elementos decorativos sobre as imagens */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/**Radial glow - Verde */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#14E259]/30 rounded-b-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#14E259]/25 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#14E259]/20 rounded-full blur-3xl"></div>

          {/**Grid pattern - Verde mais visível */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(#14E259 1px, transparent 1px),
                                linear-gradient(90deg, #14E259 1px, transparent 1px)`,
              backgroundSize: '100px 100px'
            }}
          />
          
          {/* Floating Elements - Verde */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 left-[15%] w-20 h-20 border-2 border-[#14E259]/60 rounded-2xl backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-[20%] w-32 h-32 border-2 border-[#14E259]/50 rounded-full backdrop-blur-sm"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-[10%] w-6 h-6 bg-[#00e74db0] rounded-full shadow-lg shadow-[#14E259]/50"
          />
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[25%] w-16 h-16 border-2 border-[#14E259]/40 rounded-lg backdrop-blur-sm"
          />
        </div>

        {/* Conteúdo sobre o carousel */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white max-w-4xl">
          {/**Badge */}
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/60 bg-primary/5 backdrop-blur-sm max-w-full mx-auto"
         >
          <Microscope className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Centro de  Estudos da Biodiversidade & Educação Ambiental</span>

          </motion.div>
          {/**Titulo principal */}
          <motion.h1
          initial={{opacity: 0, y:30}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 0.1}}
          className="title-editorial max-w-full mx-auto"
          >
            <span className="block font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">Conhecer para</span>
            <span className="block  mt-2 text-[#14E259]">Conservar</span>
            <span className="block text-foreground/60"></span>

          </motion.h1>
           {/* Subtitle */}
           <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle-scientific text-white mb-12 text-lg md:text-xl lg:text-2xl max-w-full mx-auto"
          >
            Investigação de excelência em biodiversidade e ecossistemas. 
            Unimos ciência, inovação e educação para compreender e proteger 
            a vida no planeta.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-[#14E259] hover:bg-[#12c94e] text-white text-lg px-8 py-6"
            >
              <Link href="/pages/sobre">Conhecer o centro CEBEA</Link>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              
              <Link href="/pages/projetos">Ver Projetos</Link>
            </Button>
          </div>
        </div>
      </section>
    
      {/* Estatísticas<Stats /> */}
      
      
      {/* Sobre */}
      <About/>
      
      {/* Missão <Missions/>*/}
      

      <Objetives/>
      
      {/* Nosso Impacto em Números */}
      <ImpactStats />
      
      {/* Projetos em Destaque */}
      <FeaturedProjects />

      <Research/>
      
      {/* Notícias Recentes */}
      <RecentNews />
      
      {/* Equipe */}
      <Team />
      
      {/* Parceiros<Partners /> */}
      <CTA/>
      

    </div>
  )
}