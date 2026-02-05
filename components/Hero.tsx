// components/Hero.tsx
import React from 'react';
import { ShieldCheck, Clock, PhoneCall } from 'lucide-react';

const Hero = () => {
  const primaryPhone = "929251620";
  const whatsappUrl = `https://wa.me/244${primaryPhone}?text=Olá! Preciso de um orçamento para desinfestação.`;

  return (
    <section className="relative bg-baratexGreen min-h-[85vh] flex items-center pt-24 overflow-hidden">
      {/* Overlay decorativo */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
              <Clock size={18} className="text-white" />
              <span className="text-sm font-medium">Serviço de Emergência 24/7 em Angola</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Adeus Pragas, <br/><span className="text-white underline decoration-white/30 text-3xl md:text-5xl">Olá Saúde e Bem-Estar</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Desinfestação profissional em Luanda. Ligue agora para o <span className="text-white font-bold">{primaryPhone}</span> e resolva o seu problema hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-white text-baratexGreen px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all shadow-xl"
              >
                <PhoneCall size={20} />
                Pedir Orçamento Grátis
              </a>
              <a 
                href="#servicos"
                className="flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                Ver Serviços
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-white" />
                <span className="text-sm opacity-90">Certificação Oficial</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-white" />
                <span className="text-sm opacity-90">Garantia Baratex</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/images/logo-baratex.jpg" 
                alt="Baratex Angola em ação" 
                className="w-full h-auto object-cover max-h-[500px]"
              />
              <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-baratexGreen font-bold flex items-center gap-2 italic">
                   Ligue: {primaryPhone}
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
