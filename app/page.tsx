"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Contact /> {/* Ativando o Formulário */}
      <WhatsAppWidget /> {/* Ativando o Botão Flutuante */}
      
      <footer className="bg-gray-900 text-white py-10 text-center text-sm">
        <p>Baratex Angola &copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        <p className="opacity-50 mt-2 text-xs">Luanda, Angola</p>
      </footer>
    </main>
  );
}

