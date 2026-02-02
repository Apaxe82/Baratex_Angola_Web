// components/WhatsAppButton.tsx
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "244929251620"; // Substitua pelo número real
  const message = "Olá Baratex! Preciso de assistência técnica para desinfestação.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Contactar via WhatsApp"
    >
      {/* Tooltip que aparece no Hover */}
      <span className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-100">
        Emergência 24h? Clique aqui!
      </span>
      
      {/* Botão com efeito de pulsação */}
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 relative">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
