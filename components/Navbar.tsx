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
        
        {/* Logo com Imagem */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image 
              src="/images/logo-baratex.jpg" 
              alt="Logo Baratex Angola" 
              fill
              className="object-contain rounded-full"
            />
          </div>
          <span className={`text-xl md:text-2xl font-black tracking-tighter italic hidden sm:block ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}>
            BARATEX<span className="text-baratexGreen">ANGOLA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex flex-col items-end mr-4">
            <span className={`text-[10px] uppercase font-bold ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Emergência 24/7</span>
            <span className={`text-sm font-bold ${scrolled ? 'text-baratexGreen' : 'text-white'}`}>{primaryPhone}</span>
          </div>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-baratexGreen transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href={`https://wa.me/244${primaryPhone}`} 
            className="bg-baratexGreen text-white px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-md"
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
          {isOpen ? <X size={30} className="text-baratexGreen" /> : <Menu size={30} className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
          <Image src="/images/logo-baratex.jpg" alt="Logo" width={80} height={80} className="rounded-full mb-4" />
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-900"
            >
              {link.name}
            </Link>
          ))}

          <div className="space-y-4 w-full mt-4">
            <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Contactos Directos</p>
            <a href={`tel:${primaryPhone}`} className="flex items-center justify-center gap-3 text-xl font-black text-baratexGreen">
              <Phone size={24} /> {primaryPhone}
            </a>
            <a href={`tel:${altPhone}`} className="flex items-center justify-center gap-3 text-xl font-black text-gray-700">
              <Phone size={24} /> {altPhone}
            </a>
            <Link 
              href={`https://wa.me/244${primaryPhone}`}
              onClick={() => setIsOpen(false)}
              className="block w-full bg-baratexGreen text-white py-4 rounded-xl font-bold text-xl shadow-lg"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
