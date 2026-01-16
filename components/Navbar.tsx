"use client"

import { Ghost, Leaf, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";// Update path as necessary
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion"
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, SetSelected] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);


    //este useeffect adiciona um delay no header
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navigation = [
        { name: "Home", href: "/" },
        { name: "Sobre Nós", href: "/pages/sobre" },
        { name: "Pesquisas", href: "/pages/pesquisas" },
        { name: "Educação", href: "/pages/educacao" },
        { name: "Áreas de ação", href: "/pages/areas" },
        { name: "Notícias e Eventos", href: "/pages/noticias" },
        { name: "Publicações", href: "/pages/publicacao" },
        { name: "Equipa", href: "/pages/equipa" },
        { name: "Contactos", href: "/pages/contatos" },
      ]
    return(
      <>
      <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
           
           <div className="container mx-auto px-4 py-2">
            <div className="flex h-16 items-center justify-between">
            {/*Logo */}
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 active:opacity-70">
            
            <div className="flex flex-col mt-5">
              <Image 
                src="/02 CEBEA.png"
                alt="CEBEA Logo"
                width={150}
                height={100}
                className="object-contain transition-transform hover:scale-105"
                priority
              />
   
            </div>
             

            
            </Link>
             {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => SetSelected(item.name)}
                className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-md no-underline transition-all duration-300 hover:bg-accent/50 group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-sky-600 transition-all duration-300 group-hover:left-0 group-hover:w-full -translate-x-1/2 group-hover:translate-x-0"></span>
              </Link>
            ))}
          </nav>
          {/**Actions */}
          <Button variant="ghost" size="icon" onClick={()=> setTheme(theme === "dark"? "light": "dark")} 
            className="hidden sm:inline-flex transition-all duration-300 hover:bg-accent hover:scale-110 active:scale-95"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Mudar Tema</span>

          </Button>

           {/* Mobile Menu */}
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="transition-all duration-300 hover:bg-accent hover:scale-110 active:scale-95">
                  <Menu className="h-5 w-5 transition-transform hover:rotate-90" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="relative px-4 py-2 text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-all duration-300 hover:translate-x-2 hover:shadow-md group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute left-0 top-0 h-full w-1 bg-sky-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r"></span>
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="mt-4 transition-all duration-300 hover:bg-accent hover:scale-105 active:scale-95 hover:shadow-md"
                  >
                    <Sun className=" h-5 w-5 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-6">Mudar Tema</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            </div>

           </div>
        </header>
        </motion.header>
        </>
    )
}