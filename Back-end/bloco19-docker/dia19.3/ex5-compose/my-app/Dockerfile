FROM node:14-alpine AS build
WORKDIR /my-app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build