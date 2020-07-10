node{
  stage('SCM Checkout'){
    git 'https://github.com/juliusriestra/cucumber-junit-data1'
  }
  stage('Compile-Package'){
    sh 'mvn package'
  }
}
