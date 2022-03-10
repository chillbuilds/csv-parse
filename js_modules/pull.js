module.exports = function pull() {
    const start = require('./start.js')
    const inquirer = require('inquirer')
    const fs = require('fs')
    const homeDir = require('os').homedir()
    inquirer.prompt({
        type: 'list',
        name: 'input',
        message: 'where are the files?',
        choices: ['"input" folder', 'desktop', 'downloads', 'exit']
    }).then((data) => {
        switch(data.input) {
            case '"input" folder': 
                next('./input')
                break;
            case 'desktop':
                next(`${homeDir}/Desktop/`)
                break;
            case 'downloads':
                next(`${homeDir}/Downloads/`)
                break;
            case 'exit':
                break;
        }
    })

    const next = (dir) => {
        if(dir != './input'){
            let dirArr = []
            fs.readdirSync(dir).forEach(dirs => {
                let stats = fs.statSync(dir + dirs)
                if(stats.isDirectory() == true){
                    dirArr.push(dirs)
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
                csvCompile(`${dir}${data.dir}/`)
            })
        }else{csvCompile('./input/')}
    }

    const csvCompile = (dir) => {
        fs.writeFileSync('./error-skus.csv', '')
        let errsRaw = fs.readFileSync('./errors.csv', 'utf-8').split('\n')
        let errArr = []
        for(const i of errsRaw) {
            errArr.push(i.split('\t')[2])
        }
        let fileArr = []
            fs.readdirSync(dir).forEach(file => {
                let typeCheck = file.split('.')
                if(typeCheck[typeCheck.length-1] == 'csv'){
                    fileArr.push(file)
                }
            })
        var linesPer = linesPerCheck(dir + fileArr[0])
        for(var i = 0; i < fileArr.length; i++) {
            let rawArr = fs.readFileSync(dir + fileArr[i], 'utf-8').split('\n')
            for(var j = 1; j < rawArr.length-1; j=j+linesPer) {
                let lineCheck = rawArr[j].split(',')
                for(var n = 0; n < errArr.length; n++) {
                    if(lineCheck[lineCheck.length-3].split('-')[0] == errArr[n]) {
                        fs.appendFileSync('./error-skus.csv', errArr[n]+'\n')
                    }
                }
            }
        }
        console.log('\nerror list saved to "error-skus.csv"\n')
        setTimeout(() => {start()}, 500)
    }

    const linesPerCheck = (file) => {
        let lineArr = fs.readFileSync(file, 'utf-8').split('\n')
        let ref = lineArr[1].split(',')[0]
        let lineCount = 0
        for(var i = 1; i < 150; i++) {
            if(lineArr[i].split(',')[0] == ref){
                lineCount++
            }
        }
        return lineCount
    }
}