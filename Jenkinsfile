pipeline {
    agent any

    environment {
        // Set Node.js path if needed
        NODE_HOME = 'C:\\Program Files\\nodejs'
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('frontend') {
                    // Clean install to ensure all packages including devDependencies
                    bat 'npm ci'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                // Build and push Docker images
                bat 'docker build -t lxp-frontend:latest frontend'
                bat 'docker build -t lxp-backend:latest backend'
                bat 'docker push lxp-frontend:latest'
                bat 'docker push lxp-backend:latest'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
