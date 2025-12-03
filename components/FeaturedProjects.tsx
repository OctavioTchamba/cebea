import { ArrowRight, FlagIcon, IceCream2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function FeaturedProjects(){
    return(
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-4 mx-auto">
                <h2 className="font-heading text-3xl mf:text-4xl font-bold text-balance">Últimos Projetos</h2>
                 <p className="text-pretty text-lg  text-muted-foreground leading-relaxed">
                    ultimos projetos Realizados pela equipa cebea
                 </p>

                </div>
               <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 hover:border-primary/50">
                <CardContent className="">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FlagIcon className="h-6 w-6 text-primary"/>
                    </div>
                     <h3 className="mt-3 font-heading text-xl font-semibold">Projeto 1

                     </h3>
                     <p className="text-muted-foreground leading-relaxed">
                        se bebesse
                     </p>
                     <Link href="research" className="inline-flex items-center text-primary font-medium hover-underline">
                      Saiba Mais
                      <ArrowRight className="ml-1 h-4 w-4"/>
                     </Link>
                </CardContent>
               
               </Card>

               <Card className="border-2 hover:border-primary/50 transition-colors ease-in-out">
               <CardContent className="">
                 <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IceCream2 className=""/>
                 </div>
                 <h3 className="mt-3 font-semibold text-xl font-heading">
                   Projeto 2
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">Se nao bebesse</p>
                  <Link href="/projets" className="inline-flex items-center text-primary font-medium">
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4"/>
                  </Link>
               </CardContent>
               </Card>
               <Card className="border-2 hover:border-primary/50 transition-colors">
               <CardContent className="">
                 <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IceCream2 className=""/>
                 </div>
                 <h3 className="mt-3 font-semibold text-xl font-heading">
                   Projeto 3
                 </h3>
                 <p className="text-muted-foreground leading-relaxed">Se nao bebesse</p>
                  <Link href="/projets" className="inline-flex items-center text-primary font-medium">
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