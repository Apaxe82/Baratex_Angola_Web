// components/Footer.tsx
import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Branding */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold tracking-tighter italic">BARATEX<span className="text-baratexGreen">ANGOLA</span></h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Líder em desinfestação profissional em Angola. Protegemos a sua casa e o seu negócio com eficácia e segurança 24 horas por dia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-baratexGreen transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-baratexGreen transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-baratexGreen transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-baratexGreen transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-baratexGreen transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-baratexGreen transition-colors">Serviços</a></li>
              <li><a href="#contacto" className="hover:text-baratexGreen transition-colors">Contactos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços Populares */}
          <div>
            <h4 className="text-lg font-bold mb-6">Principais Pragas</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-baratexGreen transition-colors">Desbaratização</a></li>
              <li><a href="#" className="hover:text-baratexGreen transition-colors">Desratização</a></li>
              <li><a href="#" className="hover:text-baratexGreen transition-colors">Controlo de Cupins</a></li>
              <li><a href="#" className="hover:text-baratexGreen transition-colors">Desinfecção Viral</a></li>
            </ul>
          </div>

          {/* Coluna 4: Emergência */}
          <div className="bg-baratexGreen/10 p-6 rounded-xl border border-baratexGreen/20">
            <h4 className="text-lg font-bold mb-4 text-baratexGreen">Piquete 24 Horas</h4>
            <p className="text-gray-300 text-sm mb-4">Disponíveis para intervenções urgentes em condomínios e empresas.</p>
            <p className="text-xl font-bold text-white tracking-widest">+244 929 251 620</p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Baratex Angola. Todos os direitos reservados. Desenvolvido para máxima performance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
