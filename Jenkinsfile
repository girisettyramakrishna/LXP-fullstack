pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'psmdocker123'
        DOCKERHUB_TOKEN = credentials('dockerhub_token')
        KUBECONFIG = 'C:\\Users\\ADMIN\\.kube\\config'
    }

    stages {

        stage('Checkout') {
            steps {
                git url: 'https://github.com/girisettyramakrishna/LXP_fullstack.git', branch: 'master'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat "docker build -t %DOCKERHUB_USERNAME%/frontend_app:latest ."
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    bat "docker build -t %DOCKERHUB_USERNAME%/backend_app:latest ."
                }
            }
        }

        stage('Push Images') {
            steps {
                bat "echo %DOCKERHUB_TOKEN% | docker login -u %DOCKERHUB_USERNAME% --password-stdin"
                bat "docker push %DOCKERHUB_USERNAME%/frontend_app:latest"
                bat "docker push %DOCKERHUB_USERNAME%/backend_app:latest"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat "kubectl apply -f k8s -n lxp"
                bat "kubectl rollout restart deployment backend -n lxp"
                bat "kubectl rollout restart deployment frontend -n lxp"
            }
        }
    }
}
