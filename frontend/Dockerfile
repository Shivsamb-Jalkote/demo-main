# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:alpine


RUN rm -rf /usr/share/nginx/html/*

# Copy React build files from previous stage
COPY --from=build /app/build /usr/share/nginx/html


# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

