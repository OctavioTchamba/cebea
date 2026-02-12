import Team from "@/components/Team";
import { Users, Globe, Award, MapPin } from "lucide-react";

export default function EquipaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-cover-fit px-4 pb-20 pt-32 md:pt-16"
        style={{ backgroundImage: `url(/Imagem3.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-6">
            Nossa Equipa
            <span className="block text-white mt-2">
              Excelência em Investigação
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Conheça os investigadores dedicados à conservação da biodiversidade e educação ambiental em Angola
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Equipa Multidisciplinar</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>Colaboração Internacional</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>Investigadores Reconhecidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Component */}
      <Team />
    </div>
  );
}