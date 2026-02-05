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
      <About /> {/* <-- Reativamos este agora */}
      
      {/* Mantenha estes dois comentados por um momento */}
      {/* <Contact /> */}
      {/* <WhatsAppWidget /> */}
      
      <div className="bg-white p-10 text-center border-t text-gray-400 text-sm">
        Baratex Angola &copy; 2024
      </div>
    </main>
  );
}

