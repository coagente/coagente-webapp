import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coagente - Desarrollamos soluciones de AI personalizadas",
  description: "Coagente desarrolla soluciones personalizadas de IA para empresas innovadoras. Nuestros servicios incluyen desarrollo de chatbots, creación de contenido, automatización de flujos de trabajo, desarrollo LLM y consultoría en IA.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${interTight.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
