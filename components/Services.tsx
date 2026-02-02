// components/Services.tsx
import React from 'react';
import { Bug, MousePointer2, ShieldAlert, ThermometerSnowflake, Home, Factory } from 'lucide-react';

const services = [
  {
    title: 'Desbaratização',
    description: 'Controlo especializado de baratas com gel e pulverização de baixa toxicidade.',
    icon: <Bug size={32} />,
    slug: 'desbaratizacao'
  },
  {
    title: 'Desratização',
    description: 'Eliminação de roedores com métodos seguros para crianças e animais de estimação.',
    icon: <MousePointer2 size={32} />,
    slug: 'desratizacao'
  },
  {
    title: 'Desinfestação de Térmitas',
    description: 'Proteção de estruturas de madeira e móveis contra cupins e caruncho.',
    icon: <ShieldAlert size={32} />,
    slug: 'termitas'
  },
  {
    title: 'Desinfeção Industrial',
    description: 'Serviços profundos para armazéns, fábricas e escritórios em Luanda.',
    icon: <Factory size={32} />,
    slug: 'industrial'
  },
  {
    title: 'Controlo de Formigas',
    description: 'Tratamentos preventivos e curativos para infestações de formigas.',
    icon: <Home size={32} />,
    slug: 'formigas'
  },
  {
    title: 'Pulverização COVID-19',
    description: 'Eliminação de vírus e bactérias em espaços públicos e privados.',
    icon: <ThermometerSnowflake size={32} />,
    slug: 'desinfecao'
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-baratexGreen font-bold text-sm uppercase tracking-widest mb-3">Especialistas em Higiene</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluções Completas de Controlo de Pragas
          </p>
          <div className="h-1 w-20 bg-baratexGreen mx-auto rounded-full"></div>
        </div>

        {/* Grelha de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-baratexGreen hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-baratexGreen/10 text-baratexGreen rounded-xl flex items-center justify-center mb-6 group-hover:bg-baratexGreen group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-baratexGreen transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <a 
                href={`/servicos/${service.slug}`} 
                className="text-baratexGreen font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Saber mais <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
