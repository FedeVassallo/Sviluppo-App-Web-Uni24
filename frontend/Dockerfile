# Usa un'immagine di base con Node.js
FROM node:16-alpine

# Imposta la directory di lavoro
WORKDIR /app

# Installa le dipendenze del frontend
COPY package*.json ./
RUN npm install

# Copia il codice sorgente del frontend
COPY . .

# Compila l'app Angular
RUN npm run build --prod

# Usa un server web leggero per servire i file statici
FROM nginx:alpine
COPY --from=0 /app/dist/your-angular-app /usr/share/nginx/html

# Espone la porta 80 per il server Nginx
EXPOSE 80

# Comando di avvio per Nginx
CMD ["nginx", "-g", "daemon off;"]

