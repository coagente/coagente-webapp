# Scripts de Producción - CoAgente

## Descripción

Esta configuración incluye scripts optimizados para testing de builds productivos y gestión de contenedores Docker.

## Scripts Disponibles

### `./prod-run.sh`
**Build y ejecución productiva**
- Puerto: `3000` (http://localhost:3000)
- Modo: Production build optimizado
- Features: Standalone output, compresión habilitada, health checks
- Build time: ~2-5 minutos (primera vez)

```bash
./prod-run.sh
```

### `./prod-stop.sh`
**Detener contenedores productivos**
```bash
./prod-stop.sh
```

### `./prod-status.sh`
**Verificar estado de todos los servicios**
```bash
./prod-status.sh
```

### `./dev-run.sh`
**Desarrollo con hot reload**
- Puerto: `3002` (http://localhost:3002)
- Features: Hot reload, file watching, volúmenes montados

```bash
./dev-run.sh
```

## Configuración

### Docker Compose Files

- `docker-compose.dev.yml` - Desarrollo con hot reload
- `docker-compose.prod.yml` - Producción optimizada
- `docker-compose.yml` - Configuración base

### Dockerfiles

- `Dockerfile` - Multi-stage production build
- `Dockerfile.dev` - Optimizado para desarrollo

## Diferencias Clave: Dev vs Prod

| Aspecto | Desarrollo | Producción |
|---------|------------|------------|
| Puerto | 3002 | 3000 |
| Build | Hot reload | Standalone optimizado |
| Volúmenes | Montados | Ninguno |
| Tamaño imagen | ~1.2GB | ~150MB |
| Startup time | ~30s | ~10s |
| Resource limits | Ninguno | CPU: 1.0, RAM: 1GB |

## Health Checks

El contenedor productivo incluye health checks automáticos:
- Endpoint: `/api/logo`
- Intervalo: 30s
- Timeout: 10s
- Start period: 40s

## Comandos Útiles

```bash
# Ver logs en tiempo real
docker-compose -f docker-compose.prod.yml logs -f

# Verificar health status
docker inspect coagente-prod --format='{{.State.Health.Status}}'

# Ver recursos utilizados
docker stats coagente-prod

# Rebuild forzado
docker-compose -f docker-compose.prod.yml up --build --force-recreate

# Limpiar imágenes antiguas
docker image prune -f
```

## Troubleshooting

### Puerto ocupado
```bash
# Verificar qué está usando el puerto
lsof -Pi :3000 -sTCP:LISTEN

# Detener contenedores en ese puerto
docker ps --format "{{.ID}} {{.Ports}}" | grep "3000" | awk '{print $1}' | xargs docker stop
```

### Build fallido
```bash
# Limpiar y rebuild
./prod-stop.sh
docker system prune -f
./prod-run.sh
```

### Logs de debug
```bash
# Logs detallados del build
docker-compose -f docker-compose.prod.yml up --build --progress=plain
```

## Performance

### Métricas esperadas:
- **Cold start**: ~8-12 segundos
- **Memory usage**: ~200-400MB
- **CPU usage**: <5% en idle
- **Image size**: ~150MB
- **Build time**: 2-5 minutos

### Optimizaciones incluidas:
- Multi-stage Docker build
- Next.js standalone output
- Compresión gzip habilitada
- Static assets optimizados
- Resource limits configurados

## Variables de Entorno

Las siguientes variables están configuradas para producción:

```env
NODE_ENV=production
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_op14y7a
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_wmhhsin
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Evbsb35ak4Bwhndib
PORT=3000
```

## Testing de Producción

Para validar que el build productivo funciona correctamente:

1. **Ejecutar build productivo**: `./prod-run.sh`
2. **Verificar health check**: `./prod-status.sh`
3. **Probar funcionalidad**: http://localhost:3000
4. **Verificar performance**: Lighthouse audit
5. **Limpiar**: `./prod-stop.sh` 