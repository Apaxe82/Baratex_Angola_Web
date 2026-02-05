// components/Footer.tsx
import React from 'react';
import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const primaryPhone = "929251620";
  const altPhone = "957641422";

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tighter italic text-white">
              BARATEX<span className="text-baratexGreen">ANGOLA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas em desinfestação, desratização e higiene ambiental. O seu parceiro de confiança em toda a Angola.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/baratexangola" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-baratexGreen transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-baratexGreen pl-3">Contactos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-baratexGreen" />
                <span>{primaryPhone} / {altPhone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-baratexGreen" />
                <span>geral@baratexangola.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-baratexGreen" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-baratexGreen pl-3">Serviços</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#servicos" className="hover:text-white transition-colors underline decoration-baratexGreen/30">Desbaratização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors underline decoration-baratexGreen/30">Desratização</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors underline decoration-baratexGreen/30">Controlo de Cupins</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors underline decoration-baratexGreen/30">Desinfecção de Tanques</a></li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="text-lg font-bold mb-4 text-baratexGreen">Piquete 24 Horas</h4>
            <p className="text-gray-400 text-xs mb-4">Ligue a qualquer hora para intervenções urgentes.</p>
            <a href={`tel:${primaryPhone}`} className="text-xl font-black text-white block hover:text-baratexGreen transition-colors">
              {primaryPhone}
            </a>
            <a href={`tel:${altPhone}`} className="text-lg font-bold text-gray-400 block mt-2">
              {altPhone}
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Baratex Angola. Proteção máxima para a sua família.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
