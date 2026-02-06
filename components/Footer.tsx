import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#2D5A27]">Baratex Angola</h3>
            <p className="text-gray-400">Especialistas em controlo de pragas e desinfestação profissional em Luanda.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contactos</h3>
            <p className="text-gray-400">📞 +244 929 251 620</p>
            <p className="text-gray-400">📧 baratexangola@gmail.com</p>
            <p className="text-gray-400">📍 Luanda, Angola</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className="text-gray-400">Disponível 24h para Emergências</p>
            <p className="text-gray-400">Segunda - Sábado: 08:00 - 18:00</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Baratex Angola. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
