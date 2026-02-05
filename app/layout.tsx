import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Baratex Angola | Desinfestação Profissional 24h",
  description: "Líder em controlo de pragas em Luanda. Baratas, ratos e térmitas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
