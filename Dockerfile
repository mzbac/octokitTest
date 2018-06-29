FROM node:9.8.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .