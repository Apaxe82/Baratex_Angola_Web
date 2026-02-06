import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          
          {/* Coluna do Texto */}
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-[570px]">
              <h1 className="text-[#2D5A27] font-bold text-4xl sm:text-5xl md:text-[50px] leading-tight mb-6">
                Adeus Pragas, <br />
                <span className="text-gray-800">Olá Saúde e Bem-Estar</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Proteja a sua família ou empresa com a Baratex Angola. Especialistas em desinfestação 24h em Luanda. Resultados rápidos e garantidos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/244929251620"
                  className="inline-flex items-center justify-center py-4 px-8 text-white font-semibold bg-[#2D5A27] rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  Pedir Orçamento Grátis
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center py-4 px-8 text-[#2D5A27] font-semibold bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
                >
                  Nossos Serviços
                </a>
              </div>
            </div>
          </div>

          {/* Coluna da Imagem (A Barata) */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <img
                src="/images/logo-baratex.jpg"
                alt="Mascote Baratex Angola"
                className="max-w-full lg:ml-auto rounded-2xl shadow-2xl"
                style={{ maxHeight: '450px', width: 'auto' }} 
              />
              {/* Elemento decorativo para dar profundidade */}
              <span className="absolute -bottom-8 -left-8 z-[-1]">
                <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#2D5A27" />
                  <circle cx="2.5" cy="24.5" r="2.5" fill="#2D5A27" />
                  {/* ... outros círculos do padrão ... */}
                </svg>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
