pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'psmdocker123'
        KUBECONFIG = '/var/jenkins_home/.kube/config'
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
                    sh "docker build -t $DOCKERHUB_USERNAME/frontend_app:latest ."
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t $DOCKERHUB_USERNAME/backend_app:latest .'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh "docker push $DOCKERHUB_USERNAME/frontend_app:latest"
                sh "docker push $DOCKERHUB_USERNAME/backend_app:latest"
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh "kubectl apply -f k8s -n lxp"
                sh "kubectl rollout restart deployment backend -n lxp"
                sh "kubectl rollout restart deployment frontend -n lxp"
            }
        }
    }
}
