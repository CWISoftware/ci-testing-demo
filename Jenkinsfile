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
            sh 'npm run cy:verify'
            sh 'npm install'
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
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Report dos Testes', reportTitles: ''])
        }
    }
}