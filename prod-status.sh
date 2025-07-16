#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== CoAgente Status ===${NC}"

# Función para mostrar info
show_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

echo -e "\n${CYAN}📊 Estado de contenedores CoAgente:${NC}"

# Verificar contenedores en ejecución
if docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -q "coagente"; then
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "(NAMES|coagente)"
else
    show_info "No hay contenedores de CoAgente ejecutándose"
fi

echo -e "\n${CYAN}🔍 Puertos ocupados:${NC}"
echo -e "${YELLOW}Puerto 3000 (prod):${NC}"
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${GREEN}✅ En uso${NC}"
    lsof -Pi :3000 -sTCP:LISTEN | head -2
else
    echo -e "${RED}❌ Libre${NC}"
fi

echo -e "\n${YELLOW}Puerto 3002 (dev):${NC}"
if lsof -Pi :3002 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${GREEN}✅ En uso${NC}"
    lsof -Pi :3002 -sTCP:LISTEN | head -2
else
    echo -e "${RED}❌ Libre${NC}"
fi

# Verificar health check del contenedor productivo
echo -e "\n${CYAN}🏥 Health Check:${NC}"
if docker ps --format "{{.Names}}" | grep -q "coagente-prod"; then
    HEALTH_STATUS=$(docker inspect coagente-prod --format='{{.State.Health.Status}}' 2>/dev/null || echo "No disponible")
    case $HEALTH_STATUS in
        "healthy")
            echo -e "${GREEN}✅ Healthy${NC}"
            ;;
        "starting")
            echo -e "${YELLOW}🔄 Starting${NC}"
            ;;
        "unhealthy")
            echo -e "${RED}❌ Unhealthy${NC}"
            ;;
        *)
            echo -e "${BLUE}ℹ️  $HEALTH_STATUS${NC}"
            ;;
    esac
else
    show_info "Contenedor productivo no está ejecutándose"
fi

# Mostrar URLs disponibles
echo -e "\n${PURPLE}🌐 URLs disponibles:${NC}"
if docker ps --format "{{.Names}}" | grep -q "coagente.*dev\|coagente-clone"; then
    echo -e "${CYAN}🔧 Desarrollo: http://localhost:3002${NC}"
fi

if docker ps --format "{{.Names}}" | grep -q "coagente-prod"; then
    echo -e "${CYAN}🚀 Producción: http://localhost:3000${NC}"
fi

if ! docker ps --format "{{.Names}}" | grep -q "coagente"; then
    show_info "No hay servicios CoAgente disponibles"
fi

echo -e "\n${BLUE}💡 Comandos útiles:${NC}"
echo -e "  - Iniciar dev: ${CYAN}./dev-run.sh${NC}"
echo -e "  - Iniciar prod: ${CYAN}./prod-run.sh${NC}"
echo -e "  - Detener prod: ${CYAN}./prod-stop.sh${NC}"
echo -e "  - Ver logs prod: ${CYAN}docker-compose -f docker-compose.prod.yml logs -f${NC}" 