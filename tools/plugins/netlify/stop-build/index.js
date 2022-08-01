module.exports = {
    onPreBuild: ({utils}) =>{
        let currentProject= "mythology"
        let projectChanged= false
        if(!projectChanged){
            utils.build.cancelBuild("Build was cancelled because ${currentProject} was not changed")

        }
    }

}