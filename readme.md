# 🚀 Full-Stack App Deployment with Docker, Nginx, and GitLab CI/CD


requirment:-

Dockerize a Node.js backend and React.js frontend using multi-stage builds.

Set up the applications on an Ubuntu 20.04 server using Docker Compose.

Expose the applications via Nginx reverse proxy.

Implement a GitLab CI/CD pipeline for automated deployment using a self-hosted runner.

first of all i have stup ubuntu sever 20.04 as per requirment.
installed docker and docker-Compose.
security groups. 80, 3001, 3000, 3306, 3307.
then installed GitLab Runner.

```
curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh | sudo bash

sudo apt-get install gitlab-runner -y

```
created runner on gitlab.
used 
executor docker.

```
sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker gitlab-runner
```

then registerd runner on my server.
```
sudo gitlab-runner register
```





### file project structure 
```
project/
├── backend/ (Node.js)
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
├── frontend/ (React.js)
│   ├── Dockerfile
│   ├── package.json
│   └── src/
├── docker-compose.yml
└── nginx/
    └── nginx.conf
 ```   

🐳 Dockerizing the Applications
here i have clearly Implemented multi-stage-docker build to reduce the docker size.

first of all i have wrote docker file for backend.
```
# Stage 1: Build
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production
FROM node:14-slim
WORKDIR /app
COPY --from=build /app .
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]

```
then i have setup frontend

```
# Stage 1: Build
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

```

as per requirment sucessfully setup nginx reverse proxy.
 ### Nginx Reverse Proxy (nginx.conf)

 ```
 events {}

http {
    server {
        listen 80;

        location /api/ {
            proxy_pass http://api:3000/;
            rewrite ^/api(/.*)$ $1 break;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location / {
            proxy_pass http://frontend:80/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}

 ```

 


 used docker-composed to launch my containers.
 application accessed on  
  
  http://<ip of my vm>:80

  created containers
  frontend.
  backend.
  mysql.
  nginx.


  ## finally successfully done given task.














