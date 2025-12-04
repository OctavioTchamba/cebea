"use client"

import { Ghost, Leaf, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";// Update path as necessary
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/pages/sobre" },
        { name: "Research", href: "/pages/pesquisas" },
        { name: "Education", href: "/pages/educacao" },
        { name: "Areas of Action", href: "/pages/areas" },
        { name: "News & Events", href: "/pages/noticias" },
        { name: "Publications", href: "/pages/publicacao" },
        { name: "Team", href: "/team" },
        { name: "Contact", href: "/pages/contatos" },
      ]
    return(
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
           
           <div className="container mx-auto px-4 py-2">
            <div className="flex h-16 items-center justify-between">
            {/*Logo */}
            <Link href="/" className="flex items-center gap-2">
            
            <div className="flex flex-col mt-5">
              <Image 
                src="/logo-cebea3.png"
                alt="CEBEA Logo"
                width={150}
                height={100}
                className="object-contain "
              />
   
            </div>
             

            
            </Link>
             {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/**Actions */}
          <Button variant="ghost" size="icon" onClick={()=> setTheme(theme === "dark"? "light": "dark")} 
            className="hidden sm:inline-flex"
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Mudar Tema</span>

          </Button>

           {/* Mobile Menu */}
           <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
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
                      className="px-4 py-2 text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="mt-4"
                  >
                    <Sun className=" h-5 w-5 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-6">Toggle theme</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            </div>

           </div>
        </header>
    )
}