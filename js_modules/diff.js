module.exports = function diff(subDir) {
    const fs = require('fs')
    const inquirer = require('inquirer')
    const tag = require('./tag.js')
    const homeDir = require('os').homedir()
    let dirArr = []
    fs.readdirSync(homeDir + subDir).forEach(dir => {
        let stats = fs.statSync(homeDir + subDir + dir)
        if(stats.isDirectory() == true){
            dirArr.push(dir)
        }
    })
    inquirer.prompt(
        {
        type: 'list',
        name: 'dir',
        message: 'select folder containing csvs',
        choices: dirArr
        }  
    ).then((data) => {
        tag(subDir, data.dir)
    })
}