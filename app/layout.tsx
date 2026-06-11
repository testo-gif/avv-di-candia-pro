import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avv. Giacomo Di Candia — Studio Legale",
  description: "Studio legale Avv. Giacomo Di Candia. Diritto civile, penale, del lavoro e recupero crediti. Prima consulenza gratuita. 4.9★ su Google.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
