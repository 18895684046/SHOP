node() {
    stage('Prepare') {
        echo "1.Prepare Stage"
        checkout scm
        script {
            build_tag = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
            if (env.BRANCH_NAME != 'master') {
                build_tag = "${env.BRANCH_NAME}-${build_tag}"
            }
        }
        echo "${build_tag}"
    }
    stage('Test') {
      echo "2.Test Stage"
      withCredentials([usernamePassword(credentialsId: 'dockerHub', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
            sh "docker login hub.bilibili.co -u ${dockerHubUser} -p ${dockerHubPassword}"
        }
    }
    stage('Build') {
        echo "3.Build Docker Image Stage"
        sh "docker build -t hub.bilibili.co/lifajin/template-web:0.0.1 ."
    }
    stage('Push') {
        echo "4.Push Docker Image Stage"
        sh "docker push hub.bilibili.co/lifajin/template-web:0.0.1"
    }
    stage('Deploy') {
        echo "5. Deploy Stage"
    }
}
