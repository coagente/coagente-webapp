# 🚀 Coagente - AI Solutions Website

Sitio web corporativo de Coagente, empresa especializada en soluciones de inteligencia artificial para empresas.

## 🌐 **Sitio en Vivo**
- **Producción:** https://coagente-webapp.fly.dev/
- **Formulario de contacto:** https://coagente-webapp.fly.dev/#contact
- **Equipo:** https://coagente-webapp.fly.dev/team
- **FAQ:** https://coagente-webapp.fly.dev/faq
- **Proceso:** https://coagente-webapp.fly.dev/process

## 🛠️ **Stack Tecnológico**

- **Framework:** Next.js 15.3.3
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Fly.io
- **Container:** Docker

## 📧 **Funcionalidades**

✅ **Formulario de contacto funcional** - Envía emails a `info@coagente.com`  
✅ **Páginas dinámicas** - Equipo, FAQ, Proceso, Términos, Privacidad  
✅ **Responsive design** - Optimizado para móvil y desktop  
✅ **SEO optimizado** - Meta tags y estructura semántica  
✅ **Animaciones fluidas** - Experiencia de usuario premium  

## 🚀 **Deployment Rápido**

### **Opción 1: Script Automático (Recomendado)**
```bash
./deploy.sh
```

### **Opción 2: Manual**
```bash
# Configurar secrets de EmailJS
flyctl secrets set NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_op14y7a
flyctl secrets set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wmhhsin
flyctl secrets set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Evbsb35ak4Bwhndib

# Desplegar
flyctl deploy
```

## 💻 **Desarrollo Local**

### **Prerequisitos**
- Node.js 20+
- npm o yarn
- Docker (opcional)

### **Instalación**
```bash
# Clonar repositorio
git clone https://github.com/coagente/webapp.git
cd webapp

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de EmailJS

# Ejecutar en desarrollo
npm run dev
```

### **Con Docker**
```bash
# Desarrollo con Docker
docker-compose up --build

# Acceder a http://localhost:3000
```

## 📁 **Estructura del Proyecto**

```
coagente-clone/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── page.tsx        # Página principal
│   │   ├── team/           # Página del equipo
│   │   ├── faq/            # Preguntas frecuentes
│   │   ├── process/        # Nuestro proceso
│   │   ├── terms/          # Términos y condiciones
│   │   ├── privacy/        # Política de privacidad
│   │   └── cookies/        # Política de cookies
│   └── components/         # Componentes reutilizables
│       ├── ContactSection.tsx
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       └── BenefitsSection.tsx
├── public/                 # Archivos estáticos
├── deploy.sh              # Script de deployment
├── docker-compose.yml     # Configuración Docker
├── Dockerfile             # Imagen Docker
├── fly.toml               # Configuración Fly.io
└── EMAILJS-SETUP.md       # Guía de configuración EmailJS
```

## 📧 **Configuración de EmailJS**

El formulario de contacto está configurado para enviar emails automáticamente a `info@coagente.com`.

### **Variables de Entorno Requeridas:**
```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_op14y7a
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wmhhsin
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Evbsb35ak4Bwhndib
```

### **Configuración Completa:**
Ver [EMAILJS-SETUP.md](./EMAILJS-SETUP.md) para instrucciones detalladas.

## 🔧 **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
./deploy.sh          # Deploy a Fly.io
```

## 🌟 **Características del Sitio**

### **Página Principal**
- Hero section con call-to-action
- Servicios de IA destacados
- Beneficios y garantías
- Formulario de contacto funcional
- Footer completo con enlaces

### **Página del Equipo**
- **Elisa Ramírez Urón** - Directora Comercial (CCO)
- **Alberto Acuña** - CTO & Lead Developer
- **Eduardo Treviño** - Chief Growth Officer (CGO)

### **FAQ Interactivo**
- 5 categorías de preguntas
- Búsqueda en tiempo real
- Respuestas detalladas

### **Proceso de Trabajo**
- 3 fases: Evaluación, Desarrollo, Implementación
- Timeline típico de proyectos
- Métricas de éxito garantizadas

## 📊 **Información de Contacto**

- **Email:** info@coagente.com
- **Teléfono:** +52 811 999 3390
- **Dirección:** Frida Kahlo 303, Valle Oriente, San Pedro Garza García, México

## 🔒 **Seguridad y Privacidad**

- Políticas de privacidad completas
- Términos de servicio detallados
- Política de cookies
- Cumplimiento GDPR

## 📈 **Métricas y Garantías**

- ✅ ROI garantizado en 6 meses
- ✅ 30% reducción de costos
- ✅ 99.9% uptime
- ✅ Respuesta en 4 horas
- ✅ Soporte 24/7

## 🚀 **Próximos Pasos**

1. **Verificar funcionamiento** del formulario de contacto
2. **Monitorear emails** en info@coagente.com
3. **Actualizar contenido** según necesidades
4. **Optimizar SEO** para mejor posicionamiento

---

**Desarrollado con ❤️ para Coagente**  
*Transformando negocios con inteligencia artificial*
