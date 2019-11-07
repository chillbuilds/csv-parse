const testFolder = 'C:/Users/Deny/Documents/switch-folders/error-logs/';
const fs = require('fs');

const csvArr = [];

fs.readdirSync(testFolder).forEach(file => {
  csvArr.push(file);

});

// console.log(csvArr);

fs.readFile(`C:/Users/Deny/Documents/switch-folders/error-logs/${csvArr[0]}`, "utf8", function(error, data){

    // if (error) {
    //     return console.log(error);
    // }
    // const parseArr = [];
    // parseArr.push(data);
    // const x = toString(parseArr);
    // console.log(x);

    const x = data.toString();
    const y = x.split("\n");
    const z = y.toString();
    const arr = z.split(",");

    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "error"){
            console.log(arr[i + 2]);
        }
    }
})

// fs.rename('/path/to/old.png', '/path/to/new.png', function(err) {
//     if ( err ) console.log('ERROR: ' + err);
// });