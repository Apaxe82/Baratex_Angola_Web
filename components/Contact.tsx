import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    const formData = {
      nome: target.nome.value,
      telefone: target.telefone.value,
      email: target.email.value,
      praga: target.praga.value,
      mensagem: target.mensagem.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pedido enviado com sucesso! A Baratex entrará em contacto.");
        target.reset(); // Limpa o formulário
      } else {
        throw new Error();
      }
    } catch (error) {
      alert("Erro ao enviar. Por favor, tente via WhatsApp: +244 929 251 620");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Informações de Contacto */}
          <div>
            <h2 className="text-baratexGreen font-bold text-sm uppercase tracking-widest mb-3">Fale Connosco</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pronto para um ambiente <span className="text-baratexGreen">livre de pragas?</span></h3>
            <p className="text-gray-600 mb-8 text-lg">
              A nossa equipa técnica está disponível 24/7 para responder às suas necessidades em Luanda.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-baratexGreen">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">Ligue agora (24/7)</p>
                  <p className="text-lg font-bold text-gray-900">+244 929 251 620</p>
                </div>
              </div>
              {/* Repetir para Email e Localização conforme o seu código original */}
            </div>
          </div>

          {/* Formulário de Contacto */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="nome" required type="text" placeholder="Nome Completo" className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-baratexGreen" />
                <input name="telefone" required type="tel" placeholder="Telemóvel" className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-baratexGreen" />
              </div>
              <input name="email" required type="email" placeholder="E-mail" className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-baratexGreen" />
              <select name="praga" className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-baratexGreen">
                <option value="">Tipo de Praga (Opcional)</option>
                <option value="baratas">Baratas</option>
                <option value="ratos">Ratos</option>
                <option value="outros">Outros</option>
              </select>
              <textarea name="mensagem" required placeholder="Como podemos ajudar?" rows={4} className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 outline-none focus:border-baratexGreen"></textarea>
              <button type="submit" className="w-full bg-baratexGreen text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-95 transition-all">
                <Send size={18} /> Enviar Pedido de Orçamento
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
