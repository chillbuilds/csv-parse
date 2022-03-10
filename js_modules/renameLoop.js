module.exports = function renameLoop(subDir, dir, tag) {
    const start = require('./start.js')
    const homeDir = require('os').homedir()
    const fs = require('fs')
    let index = 1
    if(subDir == 'input'){
        fs.readdirSync('./input/').forEach(file => {
            let fileType = file.split('.')
            if(fileType[fileType.length-1] == 'csv'){
                fs.renameSync(`./input/${file}`, `./input/${tag}-${index}.csv`)
                index++
            }
        })
    }else{
        fs.readdirSync(homeDir + subDir + dir + '/').forEach(file => {
            let fileType = file.split('.')
            if(fileType[fileType.length-1] == 'csv'){
                fs.renameSync(`${homeDir}${subDir}${dir}/${file}`, `${homeDir}${subDir}${dir}/${tag}-${index}.csv`)
                index++
            }
        })
    }
    start()
}