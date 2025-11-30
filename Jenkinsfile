pipeline {
    agent any

    environment {
        // Add environment variables if needed
        NODE_HOME = 'C:\\Program Files\\nodejs'
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    // Use bat instead of sh for Windows
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Push Images') {
            steps {
                // Example Docker build & push (adjust names)
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
