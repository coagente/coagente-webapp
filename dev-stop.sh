#!/bin/bash

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Deteniendo Entorno de Desarrollo CoAgente ===${NC}"

# Función para mostrar éxito
show_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar info
show_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Detener contenedores de desarrollo
echo -e "\n${BLUE}🛑 Deteniendo contenedores de desarrollo...${NC}"
if [ -f "docker-compose.dev.yml" ]; then
    docker-compose -f docker-compose.dev.yml down --remove-orphans
    show_success "Contenedores de desarrollo detenidos"
else
    show_info "No se encontró docker-compose.dev.yml"
fi

# Opcional: Limpiar volúmenes
read -p "¿Deseas limpiar los volúmenes de desarrollo? (esto eliminará node_modules y .next) [y/N]: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🧹 Limpiando volúmenes...${NC}"
    docker-compose -f docker-compose.dev.yml down -v 2>/dev/null || true
    show_success "Volúmenes limpiados"
fi

# Opcional: Limpiar imágenes de desarrollo
read -p "¿Deseas limpiar las imágenes de desarrollo? [y/N]: " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${BLUE}🧹 Limpiando imágenes de desarrollo...${NC}"
    docker image rm coagente-clone-coagente-app 2>/dev/null || true
    docker image prune -f 2>/dev/null || true
    show_success "Imágenes de desarrollo limpiadas"
fi

echo -e "\n${GREEN}🎉 Entorno de desarrollo detenido exitosamente!${NC}" 