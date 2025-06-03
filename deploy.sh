#!/bin/bash

# 🚀 Script de Deploy para Coagente en Fly.io
# Este script automatiza el deployment completo con EmailJS configurado

set -e  # Salir si hay algún error

echo "🚀 Iniciando deployment de Coagente en Fly.io..."
echo "================================================"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar mensajes con colores
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "fly.toml" ]; then
    print_error "No se encuentra fly.toml. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Verificar que flyctl está instalado
if ! command -v flyctl &> /dev/null; then
    print_error "flyctl no está instalado. Instálalo desde https://fly.io/docs/getting-started/installing-flyctl/"
    exit 1
fi

# Verificar autenticación
print_status "Verificando autenticación con Fly.io..."
if ! flyctl auth whoami &> /dev/null; then
    print_error "No estás autenticado con Fly.io. Ejecuta: flyctl auth login"
    exit 1
fi

USER=$(flyctl auth whoami)
print_success "Autenticado como: $USER"

# Configurar secrets de EmailJS
print_status "Configurando secrets de EmailJS..."

# Definir las variables de EmailJS
EMAILJS_SERVICE_ID="service_op14y7a"
EMAILJS_TEMPLATE_ID="template_wmhhsin"
EMAILJS_PUBLIC_KEY="Evbsb35ak4Bwhndib"

# Configurar los secrets uno por uno
print_status "Configurando NEXT_PUBLIC_EMAILJS_SERVICE_ID..."
flyctl secrets set NEXT_PUBLIC_EMAILJS_SERVICE_ID="$EMAILJS_SERVICE_ID"

print_status "Configurando NEXT_PUBLIC_EMAILJS_TEMPLATE_ID..."
flyctl secrets set NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="$EMAILJS_TEMPLATE_ID"

print_status "Configurando NEXT_PUBLIC_EMAILJS_PUBLIC_KEY..."
flyctl secrets set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="$EMAILJS_PUBLIC_KEY"

print_success "Secrets de EmailJS configurados correctamente"

# Mostrar secrets configurados (sin mostrar valores)
print_status "Verificando secrets configurados..."
flyctl secrets list

# Hacer deployment
print_status "Iniciando deployment..."
flyctl deploy

# Verificar el status de la aplicación
print_status "Verificando status de la aplicación..."
flyctl status

# Verificar que la aplicación responde
print_status "Verificando que la aplicación responda..."
APP_URL="https://coagente-webapp.fly.dev"

# Esperar un momento para que la aplicación se inicialice
sleep 10

# Hacer una petición HTTP de prueba
if curl -s --head --request GET "$APP_URL" | grep "200 OK" > /dev/null; then
    print_success "✅ Aplicación desplegada correctamente en: $APP_URL"
else
    print_warning "⚠️  La aplicación fue desplegada pero puede estar tardando en inicializar"
    print_status "Verificando en 30 segundos más..."
    sleep 30
    if curl -s --head --request GET "$APP_URL" | grep "200 OK" > /dev/null; then
        print_success "✅ Aplicación respondiendo correctamente en: $APP_URL"
    else
        print_warning "⚠️  La aplicación no responde aún. Verifica manualmente en: $APP_URL"
    fi
fi

# Mostrar información final
echo ""
echo "🎉 DEPLOYMENT COMPLETADO"
echo "================================================"
echo "🌐 URL de la aplicación: $APP_URL"
echo "📧 Formulario de contacto: $APP_URL/#contact"
echo "👥 Página del equipo: $APP_URL/team"
echo "❓ FAQ: $APP_URL/faq"
echo "🔄 Proceso: $APP_URL/process"
echo ""
echo "📧 EmailJS configurado para enviar a: info@coagente.com"
echo "🔑 Service ID: $EMAILJS_SERVICE_ID"
echo "📝 Template ID: $EMAILJS_TEMPLATE_ID"
echo ""
echo "✅ Para verificar que el formulario funciona:"
echo "   1. Ve a $APP_URL"
echo "   2. Completa el formulario de contacto"
echo "   3. Verifica que el email llegue a info@coagente.com"
echo ""
echo "🔧 Para ver logs en tiempo real:"
echo "   flyctl logs"
echo ""
echo "📊 Para ver el status:"
echo "   flyctl status"
echo ""
print_success "¡Deployment exitoso! 🚀" 