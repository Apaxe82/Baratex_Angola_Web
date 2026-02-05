import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <WhatsAppWidget />
    </main>
  );
}

