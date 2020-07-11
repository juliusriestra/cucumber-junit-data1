pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {                                                                                                                                                                                                                
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '5cbed886-0ab9-4946-ba23-2dca2453ed0d', url: 'https://github.com/juliusriestra/cucumber-junit-data1']]])
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
