"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Vamos deixar estes comentados por agora para ver se o topo do site aparece */}
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <WhatsAppWidget /> */}
      
      <div className="bg-white p-10 text-center border-t">
        <p className="text-baratexGreen font-bold">A Navbar e o Hero devem aparecer acima deste texto.</p>
      </div>
    </main>
  );
}

