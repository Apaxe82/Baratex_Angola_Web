"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const primaryPhone = "929251620";
  const altPhone = "957641422";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo e Nome da Empresa */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-gray-100 bg-white">
            <img
              src="/images/logo-baratex.jpg" 
              alt="Baratex Logo"
              className="w-full h-full object-cover" 
            />
          </div>
          <span className={`text-xl md:text-2xl font-bold tracking-tighter italic ${
            scrolled ? 'text-gray-900' : 'text-[#2D5A27]'
          }`}>
            BARATEX<span className="text-[#2D5A27]">ANGOLA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex flex-col items-end mr-4">
            <span className={`text-[10px] uppercase font-bold ${scrolled ? 'text-gray-500' : 'text-gray-700'}`}>
              Ligue Agora
            </span>
            <span className={`text-sm font-bold ${scrolled ? 'text-[#2D5A27]' : 'text-gray-900'}`}>
              {primaryPhone}
            </span>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-[#2D5A27] transition-colors ${
                scrolled ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link 
            href={`https://wa.me/244${primaryPhone}`}
            className="flex items-center gap-2 bg-[#2D5A27] text-white px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all shadow-md"
          >
            <MessageSquare size={18} />
            Orçamento
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={30} className="text-[#2D5A27]" />
          ) : (
            <Menu size={30} className={scrolled ? 'text-gray-900' : 'text-[#2D5A27]'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <div className="w-24 h-24 overflow-hidden rounded-full shadow-xl mb-4">
            <img src="/images/logo-baratex.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-900 hover:text-[#2D5A27]"
            >
              {link.name}
            </Link>
          ))}

          <div className="space-y-4 w-full mt-4">
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Contactos Directos</p>
            <a href={`tel:${primaryPhone}`} className="flex items-center justify-center gap-3 text-xl font-black text-gray-900">
              <Phone size={24} className="text-[#2D5A27]" /> {primaryPhone}
            </a>
            <a href={`tel:${altPhone}`} className="flex items-center justify-center gap-3 text-xl font-black text-gray-900">
              <Phone size={24} className="text-[#2D5A27]" /> {altPhone}
            </a>
            <Link 
              href={`https://wa.me/244${primaryPhone}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#2D5A27] text-white py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              <MessageSquare size={24} />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
