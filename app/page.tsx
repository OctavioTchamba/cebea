import About from "@/components/About";
import Missions from "@/components/Mission";
import Stats from "@/components/Stats";
import FeaturedProjects from "@/components/FeaturedProjects";
import RecentNews from "@/components/RecentNews";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Objetives from "@/components/Objetivos";
import Link from "next/link";
import Research from "@/components/Research";
import LightRays from "@/components/LightRays";
import ImpactStats from "@/components/ImpactStats";

export default function HomePage(){
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(/hero-forest.jpg)`}}>
          <div className="absolute inset-0 bg-linear-to-r  from-[#002059] to-[#002059] opacity-50"/>
        
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Conhecer para
            <span className="block mt-2 text-secondary">Conservar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
            Dedicados à pesquisa em biodiversidade, educação ambiental e conservação da natureza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            
            <Button 
              size="lg" 
              className="bg-[#14E259] hover:bg-primary-hover text-primary-foreground text-lg px-8 py-6 shadow-hover"
            >
              <Link href="/pages/sobre">Saiba Mais sobre o CEBEA</Link>
              
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
            >
              Ver Projetos
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
      

    </div>
  )
}