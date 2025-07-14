#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== CoAgente Development Environment Setup ===${NC}"

# Función para mostrar errores
show_error() {
    echo -e "${RED}❌ Error: $1${NC}"
    exit 1
}

# Función para mostrar éxito
show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar advertencias
show_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Función para mostrar info
show_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Verificar dependencias
echo -e "\n${BLUE}📋 Verificando dependencias...${NC}"

# Verificar Docker
if ! command -v docker &> /dev/null; then
    show_error "Docker no está instalado. Por favor instala Docker Desktop."
fi
show_success "Docker está disponible"

# Verificar Docker Compose
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    show_error "Docker Compose no está disponible. Por favor verifica tu instalación de Docker."
fi
show_success "Docker Compose está disponible"

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    show_error "No se encontró package.json. Ejecuta este script desde el directorio raíz del proyecto."
fi
show_success "Directorio del proyecto verificado"

# Verificar archivos de configuración necesarios
if [ ! -f "docker-compose.yml" ]; then
    show_error "No se encontró docker-compose.yml"
fi

if [ ! -f "Dockerfile" ]; then
    show_error "No se encontró Dockerfile"
fi
show_success "Archivos de configuración encontrados"

# Crear docker-compose.dev.yml si no existe
if [ ! -f "docker-compose.dev.yml" ]; then
    show_info "Creando docker-compose.dev.yml para desarrollo..."
    cat > docker-compose.dev.yml << 'EOF'
services:
  coagente-app:
    build:
      context: .
      dockerfile: Dockerfile.dev
      args:
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: service_op14y7a
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: template_wmhhsin
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: Evbsb35ak4Bwhndib
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src
      - ./public:/app/public
      - ./package.json:/app/package.json
      - ./package-lock.json:/app/package-lock.json
      - ./next.config.ts:/app/next.config.ts
      - ./tailwind.config.ts:/app/tailwind.config.ts
      - ./tsconfig.json:/app/tsconfig.json
      - ./postcss.config.mjs:/app/postcss.config.mjs
      - ./components.json:/app/components.json
      - /app/node_modules
      - /app/.next
    environment:
      - NODE_ENV=development
      - NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_op14y7a
      - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wmhhsin
      - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Evbsb35ak4Bwhndib
      - WATCHPACK_POLLING=true
      - CHOKIDAR_USEPOLLING=true
    restart: unless-stopped
    stdin_open: true
    tty: true
EOF
    show_success "docker-compose.dev.yml creado"
fi

# Crear Dockerfile.dev si no existe
if [ ! -f "Dockerfile.dev" ]; then
    show_info "Creando Dockerfile.dev para desarrollo..."
    cat > Dockerfile.dev << 'EOF'
# Dockerfile optimizado para desarrollo con hot reload
FROM node:20-alpine

# Instalar dependencias del sistema
RUN apk add --no-cache libc6-compat

# Establecer directorio de trabajo
WORKDIR /app

# Declarar build arguments para las variables de EmailJS
ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# Establecer las variables de entorno desde los build args
ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# Variables de entorno para desarrollo
ENV NODE_ENV=development
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando para desarrollo con hot reload
CMD ["npm", "run", "dev"]
EOF
    show_success "Dockerfile.dev creado"
fi

# Mostrar configuración del entorno
echo -e "\n${BLUE}🔧 Configuración del entorno de desarrollo:${NC}"
echo "  - Puerto: 3000"
echo "  - Hot Reload: ✅ Activado"
echo "  - Turbopack: ✅ Activado"
echo "  - Polling: ✅ Activado (para sistemas de archivos virtuales)"
echo "  - EmailJS: ✅ Configurado"

# Detener contenedores existentes
echo -e "\n${BLUE}🛑 Deteniendo contenedores existentes...${NC}"
docker-compose -f docker-compose.dev.yml down --remove-orphans 2>/dev/null || true
show_success "Contenedores detenidos"

# Limpiar imágenes antiguas (opcional)
echo -e "\n${BLUE}🧹 Limpiando imágenes antiguas...${NC}"
docker image prune -f --filter label=stage=builder 2>/dev/null || true
show_info "Imágenes de construcción limpiadas"

# Construir y ejecutar en modo desarrollo
echo -e "\n${BLUE}🚀 Iniciando entorno de desarrollo...${NC}"
echo -e "${YELLOW}Esto puede tomar unos minutos la primera vez...${NC}"

# Ejecutar docker-compose con build
if docker-compose -f docker-compose.dev.yml up --build; then
    show_success "Aplicación iniciada exitosamente"
else
    show_error "Error al iniciar la aplicación"
fi

# Cleanup en caso de interrupción
trap 'echo -e "\n${YELLOW}🛑 Deteniendo contenedores...${NC}"; docker-compose -f docker-compose.dev.yml down; exit 0' INT TERM

echo -e "\n${GREEN}🎉 Entorno de desarrollo iniciado exitosamente!${NC}"
echo -e "${BLUE}📱 Accede a la aplicación en: http://localhost:3000${NC}"
echo -e "${YELLOW}💡 Para detener: Ctrl+C${NC}" 