# Dockerfile
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install \
    npm ci
COPY . .
CMD ["npm", "run", "start"]