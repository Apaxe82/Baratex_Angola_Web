// app/page.tsx
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar'; // Você criará este depois

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* Próximas seções virão aqui */}
    </main>
  );
}
