let fs = require("fs");  //filesystem
let path = require("path");

// __dirname __filename module exports require

fs.readFile(path.join(__dirname, "1.txt"), "utf8", (err, data)=>{
    if(err) return console.log(err);
    fs.readFile(path.join(__dirname, "2.txt"), "utf8", (err, data)=>{
        if(err) return console.log(err);
        console.log(data);
    });
});

function read(url){
    return new Promise((resolve, reject)=>{
        fs.readFile(url, "utf8", (err, data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
}

Promise.all([read(path.join(__dirname, '1.txt')), read(path.join(__dirname, '2.txt'))]).then(([res1, res2])=>{
    console.log(res1, res2)
})

// read(path.join(__dirname, "1.txt")).then(data=>{
//     // data 2.txt
//     return read(path.join(__dirname, data));
// }).then(data=>{
//     //data  我很帅
//     console.log("finally", data);
// }).catch(err=>{
//     console.log(err);
// })