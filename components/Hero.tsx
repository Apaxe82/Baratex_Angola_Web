// components/Hero.tsx
import React from 'react';
import { ShieldCheck, Clock, PhoneCall } from 'lucide-react'; // Ícones para passar confiança

const Hero = () => {
  return (
    <section className="relative bg-baratexGreen text-white py-20 px-6 overflow-hidden">
      {/* Overlay decorativo para textura */}
      <div className="absolute inset-0 opacity-10 bg-[url('/texture-pest.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Texto e Conteúdo */}
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Clock size={18} className="text-white" />
              <span className="text-sm font-medium">Serviço de Emergência 24/7 em Toda Angola</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Proteja o seu Espaço contra <span className="text-white underline decoration-white/30">Pragas e Bactérias</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Desinfestação profissional, segura e rápida. Soluções eficazes para residências e empresas com garantia de satisfação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/+244929251620" 
                className="flex items-center justify-center gap-2 bg-white text-baratexGreen px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl"
              >
                <PhoneCall size={20} />
                Pedir Orçamento Grátis
              </a>
              <button className="flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                Ver Nossos Serviços
              </button>
            </div>

            {/* Badges de Confiança */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-white" />
                <span className="text-sm opacity-90">Certificação Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-white" />
                <span className="text-sm opacity-90">Produtos Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Espaço para Imagem (Equipa Baratex ou Equipamento) */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/images/baratex-team.jpg" 
                alt="Equipa Baratex Angola em ação" 
                className="w-full h-auto object-cover"
              />
              {/* Elemento flutuante de "Resultado Garantido" */}
              <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-baratexGreen font-bold flex items-center gap-2">
                   100% Eficácia Garantida
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
