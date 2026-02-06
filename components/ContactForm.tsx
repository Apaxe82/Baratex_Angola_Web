"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      telefone: formData.get('telefone'),
      mensagem: formData.get('mensagem'),
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#2D5A27] rounded-3xl overflow-hidden shadow-2xl flex flex-wrap">
          
          {/* Info Side */}
          <div className="w-full lg:w-1/3 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Peça um Orçamento</h2>
              <p className="text-white/80 mb-8 text-sm">Respondemos em menos de 30 minutos para emergências em Luanda.</p>
            </div>
            <div className="space-y-4 text-sm">
              <p>📍 Luanda, Angola</p>
              <p>📞 929 251 620</p>
              <p>📧 baratexangola@gmail.com</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 bg-white p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="nome" placeholder="Seu Nome" required className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#2D5A27]" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="E-mail" required className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#2D5A27]" />
                <input name="telefone" placeholder="Telefone (Unitel/Movicel)" required className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#2D5A27]" />
              </div>
              <textarea name="mensagem" placeholder="Como podemos ajudar?" rows={4} className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#2D5A27]"></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-[#2D5A27] text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all disabled:bg-gray-400"
              >
                {status === 'loading' ? 'A enviar...' : 'Enviar Pedido'}
              </button>

              {status === 'success' && <p className="text-green-600 font-bold text-center">Mensagem enviada! Entraremos em contacto em breve.</p>}
              {status === 'error' && <p className="text-red-600 font-bold text-center">Erro ao enviar. Tente pelo WhatsApp.</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
