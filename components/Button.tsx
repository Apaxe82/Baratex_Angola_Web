import { MessageCircle } from 'lucide-react'; // Ícone similar ao WhatsApp

export default function WhatsAppFloating() {
  return (
    <a href="https://wa.me" 
       target="_blank"
       className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform">
      <MessageCircle size={35} />
    </a>
  );
}
