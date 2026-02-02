// components/About.tsx
import React from 'react';
import { CheckCircle2, Award, Users, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Imagem e Stats */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-baratex.jpg" 
                alt="Profissional da Baratex Angola a realizar desinfestação" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Card de Experiência Flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-baratexGreen text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm opacity-80 uppercase tracking-wide">Eficácia em Angola</p>
            </div>

            {/* Elemento Decorativo */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-baratexGreen/5 rounded-full -z-0"></div>
          </div>

          {/* Lado Direito: Texto */}
          <div className="lg:w-1/2">
            <h2 className="text-baratexGreen font-bold text-sm uppercase tracking-widest mb-3 text-left">Líderes no Setor</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Baratex Angola: Compromisso com a sua <span className="text-baratexGreen">Saúde e Segurança</span>
            </h3>
            
            <p className="text-gray-600 text-lg mb-8">
              Com anos de experiência no mercado angolano, a Baratex especializou-se em soluções de desinfestação que combinam tecnologia de ponta com respeito pelo meio ambiente. Atuamos em residências, indústrias e comércio com o máximo profissionalismo.
            </p>

            {/* Lista de Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-baratexGreen" size={24} />
                <span className="font-semibold text-gray-700">Equipa Certificada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-baratexGreen" size={24} />
                <span className="font-semibold text-gray-700">Produtos Autorizados</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-baratexGreen" size={24} />
                <span className="font-semibold text-gray-700">Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-baratexGreen" size={24} />
                <span className="font-semibold text-gray-700">Garantia de Serviço</span>
              </div>
            </div>

            {/* Icon Boxes Rápidos */}
            <div className="flex flex-wrap gap-8 py-6 border-t border-gray-100">
              <div className="flex flex-col items-start">
                <Users className="text-baratexGreen mb-2" size={28} />
                <span className="text-sm font-bold text-gray-900">+500 Clientes</span>
              </div>
              <div className="flex flex-col items-start">
                <MapPin className="text-baratexGreen mb-2" size={28} />
                <span className="text-sm font-bold text-gray-900Cobertura Nacional</span>
              </div>
              <div className="flex flex-col items-start">
                <Award className="text-baratexGreen mb-2" size={28} />
                <span className="text-sm font-bold text-gray-900">Qualidade ISO</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
