# Stage 1 - Build
FROM node:14.16.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

# Stage 2 - Production
FROM nginx:1.21.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
