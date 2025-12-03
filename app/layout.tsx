import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme";
import LightRays from '@/components/LightRays';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEBEA - Centro de Estudos de Biodiversidade e Educação Ambiental",
  description: "Organização voltada à investigação científica, educação ambiental e conservação da natureza. Promovendo pesquisa, educação e conservação da biodiversidade.",
  keywords: "biodiversidade, educação ambiental, conservação, pesquisa científica, natureza, meio ambiente",
  authors: [{ name: "CEBEA" }],
  openGraph: {
    title: "CEBEA - Centro de Estudos de Biodiversidade e Educação Ambiental",
    description: "Organização voltada à investigação científica, educação ambiental e conservação da natureza.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      
  

           <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
       
      </body>
    </html>
  );
}
