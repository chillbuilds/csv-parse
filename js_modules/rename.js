module.exports = function rename() {
    const inquirer = require('inquirer')
    const diff = require('./diff.js')
    const tag = require('./tag.js')
    inquirer.prompt({
        type: 'list',
        name: 'input',
        message: 'where are the files?',
        choices: ['"input" folder', 'desktop', 'downloads', 'exit']
    }).then((data) => {
        switch(data.input) {
            case '"input" folder': 
                tag('input', '')
                break;
            case 'desktop':
                diff('/Desktop/')
                break;
            case 'downloads':
                diff('/Downloads/')
                break;
            case 'exit': 
                break;
        }
    })
}