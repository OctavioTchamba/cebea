import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Handshake, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ctaOptions = [
  {
    icon: Lightbulb,
    title: "Investigue Connosco",
    description: "Junte-se a projetos de investigação de impacto global.",
    cta: "Candidatar",
  },
  {
    icon: Handshake,
    title: "Colabore",
    description: "Estabeleça parcerias institucionais e científicas.",
    cta: "Contactar",
  },
  {
    icon: Mail,
    title: "Fique Informado",
    description: "Subscreva a nossa newsletter científica.",
    cta: "Subscrever",
  },
];

const CTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background with Visual Impact */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002059] via-[#002059]/80 to-[#002059]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#14E259]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#129DE4]/20 rounded-full blur-3xl" />
        
        {/* Animated Particles */}
        <motion.div
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[20%] w-2 h-2 bg-[#14E259] rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[30%] w-3 h-3 bg-[#129DE4] rounded-full"
        />
        <motion.div
          animate={{ y: [-15, 15, -15], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[40%] w-1.5 h-1.5 bg-[#14E259] rounded-full"
        />
      </div>

      <div className="container-scientific relative z-10 py-32 md:py-40">
        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Construa o
            <span className="text-[#14E259] block">conhecimento do amanhã</span>
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
            Junte-se a uma comunidade global de investigadores comprometidos com 
            a descoberta científica e a proteção da biodiversidade.
          </p>
          <Link href="/pages/contatos">
           <Button size="lg" className="group bg-[#14E259] hover:bg-[#12c94e] text-white px-8 py-6 text-lg">
            Comece a Colaborar
            <motion.span
              className="ml-2 inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Button>
          </Link>
         
        </motion.div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card p-8 text-center card-hover group bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-[#14E259]/20 flex items-center justify-center group-hover:bg-[#14E259]/30 transition-colors">
                <option.icon className="w-7 h-7 text-[#14E259]" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-white">{option.title}</h3>
              <p className="text-white/80 text-sm mb-6">{option.description}</p>
              <Link href="/pages/contatos">
              <Button variant="outline" size="sm" className="group/btn border-[#14E259]/30 text-[#14E259] hover:bg-[#14E259] hover:text-white hover:border-[#14E259]">
                {option.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
              </Link>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
