import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloating() {
  return (
    <a href="+244929251620" // Substitua XXXXXXXXXXX pelo número de telefone
       target="_blank"
       className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[100] hover:scale-110 transition-transform flex items-center justify-center"
       aria-label="Contactar no WhatsApp">
      <FaWhatsapp size={35} />
    </a>
  );
}
