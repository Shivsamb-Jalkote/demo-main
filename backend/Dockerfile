# Stage 1: Build dependencies
FROM node:14 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production image
FROM node:14-slim
WORKDIR /app
COPY --from=builder /app .
RUN npm prune --production
EXPOSE 3000
CMD ["npm", "start"]
