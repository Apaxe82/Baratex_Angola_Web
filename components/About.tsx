const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Compromisso com a <span className="text-[#2D5A27]">Sua Segurança</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Baratex Angola nasceu com a missão de oferecer soluções de desinfestação de alta qualidade em Luanda. Utilizamos produtos certificados e técnicas modernas para garantir que a sua casa ou empresa esteja livre de pragas.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">✅ Equipa Técnica Especializada</li>
              <li className="flex items-center gap-2">✅ Atendimento 24h para Emergências</li>
              <li className="flex items-center gap-2">✅ Produtos Amigos do Ambiente</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
             {/* Pode usar uma imagem da sua equipa aqui */}
             <div className="bg-gray-100 rounded-3xl h-64 flex items-center justify-center text-gray-400 italic">
               [Imagem: Equipa Baratex em Luanda]
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
