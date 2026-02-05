import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Importante: adicione isto

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baratex Angola | Desinfestação e Controlo de Pragas 24/7",
  description: "Líder em desbaratização, desratização e desinfestação em Luanda. Atendimento profissional para residências e empresas com garantia técnica.",
  keywords: ["desinfestação Luanda", "matar baratas Angola", "desratização", "Baratex"],
  // Adicione aqui a verificação do Google que discutimos antes
  verification: {
    google: "seu_codigo_aqui", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt"> {/* Mudado para português */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> {/* A Navbar fica aqui para aparecer em todo o lado */}
        {children}
      </body>
    </html>
  );
}
