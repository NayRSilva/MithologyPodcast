

module.exports = {
    onPreBuild: ({utils}) =>{

        let projectChangedf = (currentProject, fromHash, toHash)=>{
            const execSync = require('child_process').execSync;
            const getAffected = `yarn --silent nx print-affected --base=${fromHash} --head=${toHash}`;
          const output = execSync(getAffected).toString();
          //get the list of changed projects from the output
          const changedProjects = JSON.parse(output).projects;
          if (changedProjects.find(project => project === currentProject)) {
            return true;
          } else {
            return false;
          }
        
        }

        let currentProject= "mythology"
        let projectChanged= false
        let lastDeployCommited = process.env.CACHED_COMMIT_REF;
        const latestCommit = 'HEAD';
        projectChanged = projectChangedf(currentProject,lastDeployCommited, latestCommit)

        if(!projectChanged){
            utils.build.cancelBuild("Build was cancelled because "+currentProject+" was not changed")

        }
    }

   
}

