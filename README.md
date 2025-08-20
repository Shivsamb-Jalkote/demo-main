
```
cd existing_repo
git remote add origin https://gitlab.com/b305723618/demo.git
git branch -M main
git push -uf origin main
```

# Assignment-Project
=======
# Docker MySQL Node.js React.js App

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a4b2daed-0080-4a49-aaf4-a90234bada55" />


![App](https://github.com/madhurajayashanka/docker-mysql-nodejs-reactjs-app/raw/main/Thumbnail.png)

"Docker MySQL Node.js React.js App" is a comprehensive demonstration repository showcasing the capabilities of Docker and Docker Compose. With a focus on simplicity and efficiency, this project illustrates the integration of Docker containers for deploying a full-stack application.

The repository features a React.js frontend application where users can enter their data and submit it. The submitted data is then securely transmitted to a Node.js backend server, which processes and persists it in a MySQL database. By utilizing Docker Compose, the entire application stack, including the frontend, backend, and database, can be effortlessly orchestrated and managed as isolated containers.

## Setup

To set up the project, follow the steps below:

### Prerequisites

Before running the project, make sure you have the following installed:

- Docker: [Download and Install Docker](https://docs.docker.com/get-docker/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shivsamb-Jalkote/demo-main.git
   ```

2. Navigate to the project directory:

   ```bash
   cd demo-main
   ```

3. Download the `script.sql` file and place it in the project directory.

4. Run the following command to build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

5. Login to MySQL using the specified port, username, and password:

   - Host: `localhost`
   - Port: `3307`
   - Username: `root`
   - Password: `pass123`

   You can use a MySQL client such as [MySQL Workbench](https://www.mysql.com/products/workbench/) or [phpMyAdmin](https://www.phpmyadmin.net/) to log in to the MySQL server.

6. Initialize the MySQL database by executing the `script.sql` file.

7. Access the application by opening the following URL in your web browser:

   ```
   http://localhost:3001
   ```

   This will take you to the ReactJS application interface where you can interact with the project.

