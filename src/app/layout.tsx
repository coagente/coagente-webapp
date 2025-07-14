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
  keywords: [
    "inteligencia artificial",
    "AI personalizada",
    "chatbots",
    "automatización",
    "LLM",
    "consultoría IA",
    "desarrollo AI",
    "soluciones empresariales",
    "transformación digital"
  ],
  authors: [{ name: "Coagente" }],
  creator: "Coagente",
  publisher: "Coagente",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://coagente-webapp.fly.dev',
    siteName: 'Coagente',
    title: 'Coagente - Desarrollamos soluciones de AI personalizadas',
    description: 'Transformamos empresas con IA personalizada. Implementación en 30 días, ROI garantizado en 6 meses. Soporte 24/7 especializado.',
    images: [
      {
        url: 'https://coagente-webapp.fly.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Coagente - Soluciones de IA personalizadas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coagente - Desarrollamos soluciones de AI personalizadas',
    description: 'Transformamos empresas con IA personalizada. Implementación en 30 días, ROI garantizado en 6 meses.',
    creator: '@coagente',
    images: ['https://coagente-webapp.fly.dev/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://coagente-webapp.fly.dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${interTight.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coagente",
              url: "https://coagente-webapp.fly.dev",
              logo: "https://coagente-webapp.fly.dev/api/logo",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34-XXX-XXX-XXX",
                contactType: "customer service",
                availableLanguage: "Spanish"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
                addressLocality: "Madrid"
              },
              sameAs: [
                "https://www.linkedin.com/company/coagente",
                "https://twitter.com/coagente"
              ]
            })
          }}
        />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
