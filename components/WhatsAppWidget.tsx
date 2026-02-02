// components/WhatsAppWidget.tsx
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const message = encodeURIComponent("Olá Baratex! Preciso de um orçamento para desinfestação urgente.");
  return (
    <a href={`https://wa.me{message}`}
       target="_blank"
       className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform"
       aria-label="WhatsApp Baratex">
      <FaWhatsapp size={35} />
    </a>
  );
}
