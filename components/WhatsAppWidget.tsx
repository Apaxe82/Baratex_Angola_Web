"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const phone = "244929251620";
  const message = encodeURIComponent("Olá Baratex! Preciso de uma desinfestação urgente.");
  const whatsappUrl = `https://wa.me{phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-[9999] hover:scale-110 transition-transform flex items-center justify-center border-2 border-white"
      aria-label="Contactar Baratex no WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
      {/* Badge opcional para chamar atenção */}
      <span className="absolute -top-1 -left-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
      </span>
    </a>
  );
};

export default WhatsAppWidget;

