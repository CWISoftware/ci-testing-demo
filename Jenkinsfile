pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
        }
    }
    
    stages {
        
        stage('SetUp') {
          steps {
            sh 'npm ci'
          }
        }

        stage('Testes') {
          steps {
            sh 'npm test'
          }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Report', reportTitles: 'Report'])
            cleanWs()
        }
    }
}