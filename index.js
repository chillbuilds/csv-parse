const testFolder = 'C:/Users/Deny/Documents/switch-folders/error-logs/';
const fs = require('fs');

const csvArr = [];


//gather csv file names from 'error-logs' dir and push to csvArr
fs.readdirSync(testFolder).forEach(file => {
  csvArr.push(file);

});


//rename last file in folder to kick off fresh logging and gain access to latest 
fs.rename(`${testFolder}${csvArr[csvArr.length - 1]}`, `${testFolder}final.csv`, function(err) {
    if ( err ) console.log('ERROR: ' + err);
});



//for loop to look through all log files and log error messages
fs.readFile(`C:/Users/Deny/Documents/switch-folders/error-logs/${csvArr[2]}`, "utf8", function(error, data){


    const x = data.toString();
    const y = x.split("\n");
    const z = y.toString();
    const arr = z.split(",");

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "error"){
            console.log(arr[i + 6] + "\n");
        }
    }
})


// fs.rename('/path/to/old.png', '/path/to/new.png', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });