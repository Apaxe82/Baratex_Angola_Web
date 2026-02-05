"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const primaryPhone = "929251620";
  const altPhone = "957641422";
  const emailAddress = "baratexangola@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Capturar dados do formulário
    const formData = {
      nome: (e.target as any).nome.value,
      telefone: (e.target as any).telefone.value,
      email: (e.target as any).email.value,
      praga: (e.target as any).praga.value,
      mensagem: (e.target as any).mensagem.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Pedido enviado com sucesso! A Baratex entrará em contacto.");
        (e.target as HTMLFormElement).reset(); // Limpa o formulário após sucesso
      } else {
        alert("Erro ao enviar. Por favor, tente via WhatsApp.");
      }
    } catch (error) {
      alert("Ocorreu um erro de ligação. Tente o WhatsApp.");
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
              A nossa equipa técnica está disponível 24/7 para responder às suas necessidades em Luanda e arredores. Entre em contacto para um orçamento gratuito.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-baratexGreen">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">Ligue agora (24/7)</p>
                  <p className="text-lg font-bold text-gray-900">{primaryPhone} / {altPhone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-baratexGreen">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">E-mail</p>
                  <p className="text-lg font-bold text-gray-900">{emailAddress}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-baratexGreen">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-tight">Localização</p>
                  <p className="text-lg font-bold text-gray-900">Luanda, Angola</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={`https://wa.me/244${primaryPhone}`}
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#20ba5a] transition-all"
              >
                <MessageSquare size={20} /> Falar Directo no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contacto */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="nome" type="text" placeholder="Nome Completo" required className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-baratexGreen outline-none transition-all" />
                <input name="telefone" type="tel" placeholder="Telemóvel" required className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-baratexGreen outline-none transition-all" />
              </div>
              <input name="email" type="email" placeholder="E-mail" required className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-baratexGreen outline-none transition-all" />
              <select name="praga" className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-baratexGreen outline-none transition-all text-gray-500">
                <option value="">Tipo de Praga (Opcional)</option>
                <option value="baratas">Baratas</option>
                <option value="ratos">Ratos</option>
                <option value="termitas">Térmitas/Cupins</option>
                <option value="formigas">Formigas</option>
                <option value="outros">Outros / Desinfecção</option>
              </select>
              <textarea name="mensagem" placeholder="Como podemos ajudar?" rows={4} required className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 focus:border-baratexGreen outline-none transition-all"></textarea>
              <button type="submit" className="w-full bg-baratexGreen text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-95 transition-all shadow-lg">
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
