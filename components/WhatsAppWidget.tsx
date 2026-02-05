"use client";
import { MessageSquare } from 'lucide-react';

export default function WhatsAppWidget() {
  const message = encodeURIComponent("Olá Baratex! Preciso de um orçamento para desinfestação urgente.");
  
  return (
    <a href={`https://wa.me{message}`}
       target="_blank"
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
       aria-label="WhatsApp Baratex">
      <MessageSquare size={30} />
    </a>
  );
}

