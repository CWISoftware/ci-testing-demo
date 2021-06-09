pipeline {
    agent {
        docker {
            image 'cypress/base:latest'
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
            realtimeJUnit('Testes') {
              sh 'npm run test:junit'
            }
          }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'index.html', reportName: 'Report dos Testes', reportTitles: ''])
        }
    }
}