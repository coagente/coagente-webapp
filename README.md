# Coagente AI - Website Corporativo

![Coagente AI](https://img.shields.io/badge/Coagente-AI%20Solutions-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.2.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Acerca del Proyecto

**Coagente AI** es una empresa especializada en el desarrollo de soluciones de inteligencia artificial personalizadas para compañías que buscan aumentar su productividad. Este repositorio contiene el sitio web corporativo oficial de Coagente, diseñado para mostrar nuestros servicios, procesos y capacidades en el desarrollo de soluciones AI.

### 🎯 Objetivo

Proporcionar una plataforma digital moderna y atractiva que permita a los clientes potenciales conocer nuestros servicios de AI, entender nuestro proceso de trabajo y contactarnos fácilmente para iniciar proyectos de transformación digital.

## ✨ Características Principales

- **🎨 Diseño Moderno**: Interfaz elegante con animaciones fluidas y efectos visuales avanzados
- **📱 Responsive Design**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **⚡ Performance Optimizada**: Carga rápida con Next.js 15 y optimizaciones avanzadas
- **🎭 Animaciones Interactivas**: Efectos visuales con Framer Motion para una experiencia inmersiva
- **🎯 UX/UI Centrado en Conversión**: Diseño enfocado en generar leads y contactos
- **🔍 SEO Optimizado**: Estructura optimizada para motores de búsqueda
- **♿ Accesibilidad**: Cumple con estándares de accesibilidad web

## 🛠️ Stack Tecnológico

### Frontend
- **[Next.js 15.2.0](https://nextjs.org/)** - Framework React con App Router
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion 12.15.0](https://www.framer.com/motion/)** - Librería de animaciones

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Componentes accesibles y sin estilos
- **[Shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizables con Radix UI
- **[Lucide React](https://lucide.dev/)** - Iconos SVG modernos

### Herramientas de Desarrollo
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[PostCSS](https://postcss.org/)** - Procesador de CSS
- **[Turbopack](https://turbo.build/pack)** - Bundler ultra-rápido para desarrollo

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18.0 o superior
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/coagente/webapp.git
   cd webapp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver el sitio web.

## 📁 Estructura del Proyecto

```
coagente-clone/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── globals.css        # Estilos globales
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página principal
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes UI base (Shadcn)
│   │   ├── BenefitsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── FaqSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProcessSection.tsx
│   │   └── ServicesSection.tsx
│   └── lib/                   # Utilidades y configuraciones
│       └── utils.ts
├── public/                    # Archivos estáticos
├── .gitignore                # Archivos ignorados por Git
├── components.json           # Configuración de Shadcn/ui
├── next.config.ts           # Configuración de Next.js
├── package.json             # Dependencias y scripts
├── tailwind.config.ts       # Configuración de Tailwind CSS
└── tsconfig.json           # Configuración de TypeScript
```

## 🎨 Secciones del Sitio Web

### 🏠 Hero Section
- Presentación principal de Coagente AI
- Animaciones llamativas con Framer Motion
- Call-to-action prominentes

### 🛠️ Services Section
- Descripción detallada de servicios de AI
- Iconografía moderna y clara
- Enfoque en soluciones personalizadas

### 📋 Process Section
- Metodología de trabajo paso a paso
- Visualización del proceso de desarrollo
- Transparencia en la ejecución de proyectos

### 💡 Benefits Section
- Ventajas competitivas de trabajar con Coagente
- Métricas y resultados esperados
- Casos de uso y aplicaciones

### ❓ FAQ Section
- Preguntas frecuentes sobre servicios AI
- Información técnica y comercial
- Resolución de dudas comunes

### 📞 Contact Section
- Formulario de contacto integrado
- Información de contacto directa
- Call-to-action para generar leads

## 🚀 Scripts Disponibles

```bash
# Desarrollo con Turbopack (recomendado)
npm run dev

# Construcción para producción
npm run build

# Ejecutar en producción
npm run start

# Linting del código
npm run lint
```

## 🌐 Despliegue

### Vercel (Recomendado)
El sitio está optimizado para desplegarse en [Vercel](https://vercel.com/):

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente con cada push a main

### Otras Plataformas
- **Netlify**: Compatible con build estático
- **AWS Amplify**: Soporte completo para Next.js
- **Docker**: Incluye Dockerfile para containerización

## 🔧 Configuración Avanzada

### Variables de Entorno
Crea un archivo `.env.local` para configuraciones específicas:

```env
# Ejemplo de variables de entorno
NEXT_PUBLIC_SITE_URL=https://coagente.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### Personalización de Estilos
Los estilos se pueden personalizar en:
- `tailwind.config.ts` - Configuración de Tailwind CSS
- `src/app/globals.css` - Estilos globales y variables CSS

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **Coagente AI**. Todos los derechos reservados.

## 📞 Contacto

**Coagente AI**
- Website: [https://coagente.com](https://coagente.com)
- Email: contacto@coagente.com
- GitHub: [@coagente](https://github.com/coagente)

---

**Desarrollado con ❤️ por el equipo de Coagente AI**
