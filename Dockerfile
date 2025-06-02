# Usar una imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración del paquete
COPY package.json package-lock.json* ./

# Instalar dependencias
RUN npm ci

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que usa Next.js
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"] 