pipeline {
    agent {
        docker {
            image 'cypress/browsers:node14.16.0-chrome90-ff88'
        }
    }
    
    stages {
        
        stage('Testes') {
          steps {
            sh 'npm test'
          }
        }

        stage('Report') {
          steps {
              publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Report dos Testes', reportTitles: ''])
          }
        }

    }
}