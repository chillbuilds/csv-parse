module.exports = function tagConfirm(subDir, dir, tag) {
    const inquirer = require('inquirer')
    const diff = require('./diff.js')
    const renameLoop = require('./renameLoop.js')
    tag = tag.split(' ').join('-')
    inquirer.prompt(
        {
        type: 'confirm',
        name: 'confirm',
        message: 'product name: ' + tag + '\nis this correct?'
        }
    ).then((data) => {
        if(data.confirm == true){
            renameLoop(subDir, dir, tag)
        }else{diff(subDir)}
    })
}