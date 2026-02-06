"use client";

import React from 'react';
import { Bug, Home, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    title: "Desinsetização",
    description: "Controlo eficaz de baratas, formigas, mosquitos e outros insetos rastejantes ou voadores.",
    icon: <Bug className="w-8 h-8 text-[#2D5A27]" />,
  },
  {
    title: "Desratização",
    description: "Eliminação e prevenção de roedores em residências, armazéns e espaços comerciais.",
    icon: <Zap className="w-8 h-8 text-[#2D5A27]" />,
  },
  {
    title: "Desinfestação Térmitas",
    description: "Tratamentos especializados para proteger estruturas de madeira e fundações contra cupins.",
    icon: <ShieldCheck className="w-8 h-8 text-[#2D5A27]" />,
  },
  {
    title: "Limpeza Industrial",
    description: "Serviços complementares de higienização profunda para garantir ambientes saudáveis.",
    icon: <Home className="w-8 h-8 text-[#2D5A27]" />,
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços Especializados</h2>
          <p className="text-gray-600">Soluções rápidas e seguras para qualquer tipo de praga em Luanda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-[#eaf2e9] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
