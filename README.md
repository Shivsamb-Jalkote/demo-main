<<<<<<< HEAD


## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/topics/git/add_files/#add-files-to-a-git-repository) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/b305723618/demo.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/Shivsamb-Jalkote-group/demo/-/settings/integrations)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***



## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
=======
<<<<<<< HEAD
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

## Usage

This example serves as a beginner-friendly resource to learn about full-stack Docker containerization in a practical application. It provides a simplified implementation of a full-stack application using React.js, Node.js, and MySQL, all orchestrated with Docker Compose.
>>>>>>> 77cc8864 (project)
>>>>>>> e6f5f3eb (first commit)
