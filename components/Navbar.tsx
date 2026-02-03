// components/Navbar.tsx
"use client"; // Necessário para detetar o scroll
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar a cor da barra ao fazer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-[60] transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logótipo */}
        <div className={`text-2xl font-black tracking-tighter italic transition-colors ${
          scrolled ? 'text-baratexGreen' : 'text-white'
        }`}>
          BARATEX<span className={scrolled ? 'text-gray-900' : 'text-white/80'}>ANGOLA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-baratexGreen transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+244929251620" 
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-bold transition-all ${
              scrolled 
              ? 'bg-baratexGreen text-white shadow-lg' 
              : 'bg-white text-baratexGreen'
            }`}
          >
            <Phone size={18} />
            9XX XXX XXX
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white bg-baratexGreen rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-semibold text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+244929251620" className="bg-baratexGreen text-white text-center py-4 rounded-xl font-bold">
            Ligar para Emergência
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
