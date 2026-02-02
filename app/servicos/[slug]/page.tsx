// app/servicos/[slug]/page.tsx
import React from 'react';
import Contact from '@/components/Contact';
import { ShieldCheck, Target, AlertTriangle } from 'lucide-react';

// Exemplo de como os dados seriam estruturados (poderia vir de um CMS)
const serviceData: any = {
  'desbaratizacao': {
    title: 'Desbaratização Profissional',
    problem: 'Baratas transmitem doenças graves e multiplicam-se rapidamente em climas tropicais.',
    solution: 'Utilizamos gel de última geração e pulverização residual de alta aderência.',
    features: ['Inodoro e seguro', 'Garantia de 6 meses', 'Aplicação rápida'],
    image: '/images/baratas-detail.jpg'
  },
  // Outros serviços seguiriam aqui...
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug] || serviceData['desbaratizacao'];

  return (
    <main className="pt-24">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Conteúdo Técnico */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-xl mb-8 border-l-4 border-red-500">
                  <AlertTriangle className="text-red-500 shrink-0" size={24} />
                  <p className="text-red-800 font-medium">{service.problem}</p>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">A Nossa Solução</h2>
                <p className="mb-6">{service.solution}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {service.features.map((f: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <ShieldCheck className="text-baratexGreen" />
                      <span className="font-semibold">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar de Ação Rápida */}
            <div className="lg:w-1/3">
              <div className="sticky top-28 bg-baratexGreen p-8 rounded-2xl text-white shadow-xl">
                <Target size={40} className="mb-4 opacity-50" />
                <h3 className="text-2xl font-bold mb-4">Resolva isto hoje!</h3>
                <p className="mb-6 opacity-90 text-sm">A Baratex Angola garante a eliminação total da praga ou fazemos o re-tratamento gratuito.</p>
                <a href="#contacto" className="block w-full bg-white text-baratexGreen text-center py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Solicitar Inspeção
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
