pipeline {
    agent {
        docker {
            image 'node' 
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