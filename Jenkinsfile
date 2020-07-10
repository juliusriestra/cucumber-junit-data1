node{
  stage('SCM Checkout'){
    git 'https://github.com/juliusriestra/cucumber-junit-data1'
  }
  stage('Compile-Package'){
    def mvnHome = tool name: 'JENKINS_MAVEN', type: 'maven'
    sh "${mvnHome}/bin/mvn package"
  }
}
