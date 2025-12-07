import { ArrowRight, FlagIcon, IceCream2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function FeaturedProjects(){
    return(
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4 mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-balance text-[#002059]">Últimos Projetos</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#129DE4] to-[#14E259] mx-auto mb-6"></div>
                 <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                    Últimos projetos realizados pela equipa CEBEA
                 </p>

                </div>
               <div className="grid md:grid-cols-3 gap-8">
                <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
                <div className="relative h-40 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop)`}}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center -mt-8 relative z-10 mb-4">
                        <FlagIcon className="h-6 w-6 text-[#129DE4]"/>
                    </div>
                     <h3 className="font-heading text-xl font-semibold text-[#14E259] mb-2">Projeto 1</h3>
                     <p className="text-[#002059] leading-relaxed mb-4">
                        Descrição do projeto
                     </p>
                     <Link href="research" className="inline-flex items-center text-[#129DE4] font-medium hover:text-[#0d8bc7] transition-colors">
                      Saiba Mais
                      <ArrowRight className="ml-1 h-4 w-4"/>
                     </Link>
                </CardContent>
               
               </Card>

               <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
               <div className="relative h-40 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop)`}}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
               </div>
               <CardContent className="p-6">
                 <div className="h-12 w-12 rounded-lg bg-[#14E259]/10 flex items-center justify-center -mt-8 relative z-10 mb-4">
                    <IceCream2 className="h-6 w-6 text-[#14E259]"/>
                 </div>
                 <h3 className="font-semibold text-xl font-heading text-[#14E259] mb-2">
                   Projeto 2
                 </h3>
                 <p className="text-[#002059] leading-relaxed mb-4">Descrição do projeto</p>
                  <Link href="/projets" className="inline-flex items-center text-[#14E259] font-medium hover:text-[#11c04a] transition-colors">
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4"/>
                  </Link>
               </CardContent>
               </Card>
               <Card className="relative border-2 border-transparent hover:border-[#14E259]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden group">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#14E259]"></div>
               <div className="relative h-40 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop)`}}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
               </div>
               <CardContent className="p-6">
                 <div className="h-12 w-12 rounded-lg bg-[#129DE4]/10 flex items-center justify-center -mt-8 relative z-10 mb-4">
                    <IceCream2 className="h-6 w-6 text-[#129DE4]"/>
                 </div>
                 <h3 className="font-semibold text-xl font-heading text-[#14E259] mb-2">
                   Projeto 3
                 </h3>
                 <p className="text-[#002059] leading-relaxed mb-4">Descrição do projeto</p>
                  <Link href="/projets" className="inline-flex items-center text-[#129DE4] font-medium hover:text-[#0d8bc7] transition-colors">
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4"/>
                  </Link>
               </CardContent>
                
               </Card>
               </div>
               <div className="mt-5 flex items-center justify-center">
                <Button className="mt-5 ">
                 <Link href="/projets" className="inline-flex items-center">
                 Ver mais Projetos
                 <ArrowRight className="ml-1 h-3 w-3"/>
                 </Link>
               </Button>
               </div>
               

               
               
              
            </div>

        </section>
    )
}