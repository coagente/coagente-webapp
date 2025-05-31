# Usar una imagen base de Node.js
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración
COPY package.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./
COPY components.json ./
COPY eslint.config.mjs ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY src ./src
COPY public ./public

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto que usa Next.js
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"] 