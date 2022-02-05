module.exports = function tag(subDir, dir) {
    const inquirer = require('inquirer')
    const tagConfirm = require('./tagConfirm.js')
    inquirer.prompt(
        {
        type: 'input',
        name: 'tag',
        message: 'enter product name for csv titles'
        }
    ).then((data) => {
        tagConfirm(subDir, dir, data.tag)
    })
}