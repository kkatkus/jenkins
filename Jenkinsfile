pipeline {
    agent {
        docker {
            image 'node:10.16.0-jessie' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('install') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}