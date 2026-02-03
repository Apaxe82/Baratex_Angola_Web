"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o fundo ao fazer scroll
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
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className={`text-2xl font-black tracking-tighter italic ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}>
            BARATEX<span className="text-baratexGreen">ANGOLA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
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
            href="#contacto" 
            className="bg-baratexGreen text-white px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <Phone size={18} />
            Orçamento
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-baratexGreen"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[90] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-900"
          >
            <X size={35} />
          </button>
          
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-gray-900 hover:text-baratexGreen"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="bg-baratexGreen text-white px-8 py-4 rounded-xl font-bold text-xl"
          >
            Pedir Orçamento
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
