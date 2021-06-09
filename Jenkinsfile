pipeline {
    agent {
        docker {
            image 'cypress/browsers:node14.16.0-chrome90-ff88'
        }
    }
    
    stages {
        
        stage('SetUp') {
          steps {
            sh 'npm install'
          }
        }

        stage('Testes') {
          steps {
            sh 'npm test'
          }
        }

        post {
            always {
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Report dos Testes', reportTitles: ''])
                cleanWs()
            }
        }

    }
}