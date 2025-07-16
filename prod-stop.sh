#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== CoAgente Production Stop ===${NC}"

# Función para mostrar éxito
show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar info
show_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

echo -e "\n${BLUE}🛑 Deteniendo contenedor productivo...${NC}"

# Detener contenedores productivos
if docker-compose -f docker-compose.prod.yml down --remove-orphans; then
    show_success "Contenedor productivo detenido exitosamente"
else
    echo -e "${RED}❌ Error al detener el contenedor${NC}"
    exit 1
fi

# Mostrar estado final
echo -e "\n${BLUE}📊 Estado de contenedores:${NC}"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -E "(NAMES|coagente)" || show_info "No hay contenedores de CoAgente ejecutándose"

echo -e "\n${GREEN}🎉 Limpieza completada!${NC}" 