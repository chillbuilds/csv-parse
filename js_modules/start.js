module.exports = function start() {
    const inquirer = require('inquirer')
    const pull = require('./pull.js')
    const rename = require('./rename.js')
    inquirer.prompt({
      type: 'list',
      name: 'next',
      message: 'what do you want to do?',
      choices: ['pull error skus', 'rename csvs', 'exit']
    }).then((data) => {
        switch(data.next) {
            case 'rename csvs': 
                rename()
                break;
            case 'pull error skus':
                pull()
                break;
            case 'exit':
                break;
        }
      })
}