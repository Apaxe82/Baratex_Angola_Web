import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/Contact';
import { ShieldCheck, Target, AlertTriangle, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

// 1. Tipagem rigorosa para evitar o uso de 'any'
interface ServiceDetail {
  title: string;
  problem: string;
  solution: string;
  features: string[];
  image: string;
  metaDesc: string;
}

const serviceData: Record<string, ServiceDetail> = {
  'desbaratizacao': {
    title: 'Desbaratização Profissional',
    problem: 'As baratas multiplicam-se rapidamente em climas tropicais como o de Luanda, transmitindo salmonela e gastroenterite.',
    solution: 'Utilizamos um sistema híbrido de gel isco (sem cheiro) e pulverização de barreira com piretróides de última geração.',
    features: ['Aplicação sem necessidade de sair de casa', 'Eficaz contra baratas germânicas e americanas', 'Garantia por escrito de 6 meses'],
    image: '/images/desbaratizacao-detalhe.jpg',
    metaDesc: 'Eliminação total de baratas em Luanda. Métodos seguros e eficazes pela Baratex Angola.'
  },
  'desratização': {
    title: 'Controlo de Ratos e Roedores',
    problem: 'Ratos causam danos estruturais e representam riscos graves à saúde pública e segurança alimentar.',
    solution: 'Implementação de estações de isquagem monitorizadas e selagem de pontos de entrada.',
    features: ['Iscos resistentes à humidade', 'Estações de segurança para crianças/pets', 'Relatório de monitorização'],
    image: '/images/desratizacao-detalhe.jpg',
    metaDesc: 'Serviço profissional de desratização em Angola. Proteja a sua casa ou empresa contra roedores.'
  },
  'termitas': {
    title: 'Tratamento de Térmitas e Caruncho',
    problem: 'As térmitas (cupins) podem destruir a estrutura de madeira do seu imóvel de forma silenciosa e dispendiosa.',
    solution: 'Barreiras químicas no solo e tratamento por injeção direta na madeira afetada.',
    features: ['Inspeção técnica detalhada', 'Produtos com efeito residual prolongado', 'Certificado de garantia'],
    image: '/images/termitas-detalhe.jpg',
    metaDesc: 'Especialistas em tratamento de térmitas em Luanda. Proteja o seu património com a Baratex.'
  }
};

// 2. SEO Dinâmico: O Google vai adorar isto
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceData[params.slug];
  if (!service) return { title: 'Serviço não encontrado' };

  return {
    title: `${service.title} | Baratex Angola`,
    description: service.metaDesc,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  // Se o serviço não existir, mostra a página 404 padrão
  if (!service) {
    notFound();
  }

  const primaryPhone = "929251620";

  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb / Voltar */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-6">
          <Link href="/#servicos" className="flex items-center gap-2 text-sm text-gray-500 hover:text-baratexGreen transition-colors">
            <ChevronLeft size={16} /> Voltar para todos os serviços
          </Link>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Lado Esquerdo: Conteúdo */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                {service.title}
              </h1>

              {/* Imagem Otimizada */}
              <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-10 shadow-2xl">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <div className="flex items-start gap-4 p-8 bg-red-50 rounded-2xl mb-10 border-l-8 border-red-500">
                  <AlertTriangle className="text-red-600 shrink-0" size={32} />
                  <div>
                    <h4 className="text-red-900 font-bold text-xl mb-1">O Problema</h4>
                    <p className="text-red-800/90 leading-relaxed">{service.problem}</p>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="text-baratexGreen" size={32} />
                  A Nossa Abordagem Técnica
                </h2>
                <p className="text-xl leading-relaxed mb-10">
                  {service.solution}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-baratexGreen/30 transition-all">
                      <ShieldCheck className="text-baratexGreen shrink-0" size={28} />
                      <span className="font-bold text-gray-800">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Lado Direito: Sidebar Sticky */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="bg-baratexGreen p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <Target size={120} className="absolute -bottom-10 -right-10 opacity-10" />
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Agendar Inspeção</h3>
                  <p className="mb-8 opacity-90 text-sm leading-relaxed relative z-10">
                    Não deixe que uma pequena infestação se torne um problema grave. Atuamos em 24h em toda a província de Luanda.
                  </p>
                  
                  <div className="space-y-4 relative z-10">
                    <a 
                      href={`https://wa.me/244${primaryPhone}`} 
                      className="block w-full bg-white text-baratexGreen text-center py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-lg"
                    >
                      Falar no WhatsApp
                    </a>
                    <p className="text-center text-xs opacity-70 font-medium">Resposta imediata via chat</p>
                  </div>
                </div>

                {/* Card Extra de Garantia */}
                <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-baratexGreen" size={24} />
                    <span className="font-bold">Selo de Qualidade</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Utilizamos apenas produtos certificados e seguros para espaços com crianças e animais domésticos.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
