import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coagente - Soluciones de IA Personalizadas',
    short_name: 'Coagente',
    description: 'Desarrollamos soluciones personalizadas de IA para empresas innovadoras',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e293b',
    theme_color: '#1e293b',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'technology', 'productivity'],
    lang: 'es',
    orientation: 'portrait-primary',
    scope: '/',
  }
} 