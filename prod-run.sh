#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== CoAgente Production Build Test ===${NC}"

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

# Función para mostrar progreso
show_progress() {
    echo -e "${PURPLE}🔄 $1${NC}"
}

# Verificar dependencias
echo -e "\n${BLUE}📋 Verificando dependencias para build productivo...${NC}"

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
if [ ! -f "docker-compose.prod.yml" ]; then
    show_error "No se encontró docker-compose.prod.yml"
fi

if [ ! -f "Dockerfile" ]; then
    show_error "No se encontró Dockerfile"
fi

if [ ! -f "next.config.ts" ]; then
    show_error "No se encontró next.config.ts"
fi
show_success "Archivos de configuración encontrados"

# Verificar configuración de Next.js
if ! grep -q "output.*standalone" next.config.ts; then
    show_warning "next.config.ts no tiene configuración 'standalone'. El build podría no ser óptimo."
fi

# Mostrar configuración del entorno de producción
echo -e "\n${PURPLE}🔧 Configuración del entorno productivo:${NC}"
echo "  - Puerto: 3000 (http://localhost:3000)"
echo "  - Modo: Production Build"
echo "  - Output: Standalone"
echo "  - Optimización: ✅ Activada"
echo "  - Compresión: ✅ Activada"
echo "  - Source Maps: ❌ Desactivados"
echo "  - Telemetría: ❌ Desactivada"

# Verificar si hay contenedores productivos en ejecución
echo -e "\n${BLUE}🔍 Verificando contenedores existentes...${NC}"
if docker ps --format "table {{.Names}}" | grep -q "coagente-prod"; then
    show_info "Contenedor productivo en ejecución. Deteniéndolo..."
    docker-compose -f docker-compose.prod.yml down
fi

# Limpiar contenedores e imágenes previas
echo -e "\n${BLUE}🧹 Limpiando build anterior...${NC}"
docker-compose -f docker-compose.prod.yml down --remove-orphans 2>/dev/null || true
docker image rm coagente-clone-coagente-app-prod 2>/dev/null || true
show_success "Limpieza completada"

# Verificar puerto 3000
echo -e "\n${BLUE}🔌 Verificando disponibilidad del puerto 3000...${NC}"
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    show_warning "Puerto 3000 está en uso. Intentando liberar..."
    # Intentar detener cualquier servicio en puerto 3000
    if docker ps --format "{{.Ports}}" | grep -q "3000"; then
        show_info "Deteniendo contenedores Docker que usan puerto 3000..."
        docker ps --format "{{.ID}} {{.Ports}}" | grep "3000" | awk '{print $1}' | xargs -r docker stop
    fi
    sleep 2
    if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
        show_error "No se pudo liberar el puerto 3000. Por favor detén manualmente el servicio que lo está usando."
    fi
fi
show_success "Puerto 3000 disponible"

# Construir y ejecutar en modo producción
echo -e "\n${PURPLE}🚀 Iniciando build productivo...${NC}"
echo -e "${YELLOW}Esto puede tomar varios minutos la primera vez...${NC}"
echo -e "${CYAN}Fases del build:${NC}"
echo -e "  1. 📦 Instalación de dependencias"
echo -e "  2. 🏗️  Build de Next.js"
echo -e "  3. 🔧 Optimización de imagen"
echo -e "  4. 🚀 Inicio del contenedor"

# Mostrar progreso de build
show_progress "Fase 1/4: Instalando dependencias..."

# Ejecutar docker-compose con build forzado
if docker-compose -f docker-compose.prod.yml up --build --remove-orphans; then
    show_success "¡Build productivo completado exitosamente!"
else
    show_error "Error durante el build productivo"
fi

# Información post-build
echo -e "\n${GREEN}🎉 Build productivo iniciado exitosamente!${NC}"
echo -e "${CYAN}📱 URL de la aplicación: http://localhost:3000${NC}"
echo -e "${YELLOW}💡 Comandos útiles:${NC}"
echo -e "  - Ver logs: ${CYAN}docker-compose -f docker-compose.prod.yml logs -f${NC}"
echo -e "  - Detener: ${CYAN}docker-compose -f docker-compose.prod.yml down${NC}"
echo -e "  - Estado: ${CYAN}docker-compose -f docker-compose.prod.yml ps${NC}"
echo -e "  - Health: ${CYAN}docker inspect coagente-prod --format='{{.State.Health.Status}}'${NC}"

echo -e "\n${BLUE}🔍 Verificando health check...${NC}"
echo -e "${YELLOW}Esperando 40 segundos para que la aplicación inicie completamente...${NC}"

# Cleanup en caso de interrupción
trap 'echo -e "\n${YELLOW}🛑 Deteniendo contenedores...${NC}"; docker-compose -f docker-compose.prod.yml down; exit 0' INT TERM

# Mostrar logs en tiempo real
echo -e "\n${CYAN}📋 Logs del contenedor (Ctrl+C para detener):${NC}" 