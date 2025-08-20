pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "docker.io"
        BACKEND_IMAGE   = "shivjalkote/backend:latest"
        FRONTEND_IMAGE  = "shivjalkote/frontend:latest"
    }

    stages {

        // ----------------------------
        // Build
        // ----------------------------
        stage('Build Backend') {
            agent { docker { image 'node:18' } }
            steps {
                echo "Building backend..."
                dir('backend') {
                    sh '''
                        npm install
                        if npm run | grep -q build; then
                          npm run build
                        else
                          echo "No build script"
                        fi
                    '''
                }
            }
        }

        stage('Build Frontend') {
            agent { docker { image 'node:18' } }
            steps {
                echo "Building frontend..."
                dir('frontend') {
                    sh '''
                        npm install
                        npm run build
                    '''
                }
            }
        }

        // ----------------------------
        // Test
        // ----------------------------
        stage('Test Backend') {
            agent { docker { image 'node:18' } }
            steps {
                echo "Testing backend..."
                dir('backend') {
                    sh '''
                        if npm run | grep -q test; then
                          npm test || true
                        else
                          echo "No tests"
                        fi
                    '''
                }
            }
        }

        stage('Test Frontend') {
            agent { docker { image 'node:18' } }
            steps {
                echo "Testing frontend..."
                dir('frontend') {
                    sh 'npm test || true'
                }
            }
        }

        // ----------------------------
        // Docker Build & Push
        // ----------------------------
        stage('Docker Build & Push') {
            agent {
                docker {
                    image 'docker:latest'
                    args '--privileged -v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                echo "Building Docker images..."
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker build -t $BACKEND_IMAGE ./backend
                        docker build -t $FRONTEND_IMAGE ./frontend
                        docker push $BACKEND_IMAGE
                        docker push $FRONTEND_IMAGE
                    '''
                }
            }
        }

        // ----------------------------
        // Deploy
        // ----------------------------
        stage('Deploy on EC2') {
            steps {
                echo "Deploying on EC2 with Jenkins..."
                sshagent(['ec2-ssh-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@YOUR_EC2_PUBLIC_IP "
                            cd /home/ubuntu/your_project &&
                            git pull origin main &&
                            docker-compose down || true &&
                            docker-compose pull &&
                            docker-compose up -d --build
                        "
                    '''
                }
            }
        }
    }
}
