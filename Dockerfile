# Use the official Node.js runtime as the base image
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de tu aplicación al contenedor
COPY . .

# Define el comando para ejecutar tu aplicación
CMD ["node", "index.js"]
