import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; // Importe em falta
import Footer from "../components/Footer"; // Importe em falta

export const metadata: Metadata = {
  title: "Baratex Angola | Desinfestação 24h",
  description: "Serviços profissionais de controlo de pragas em Luanda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="light" style={{ scrollBehavior: 'smooth' }}>
      <body className="antialiased bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
