let fs = require("fs");  //filesystem
let path = require("path");

// let arr = []; //外面添加的
// function out(single){
//     arr.push(single);
//     if(arr.length==2){
//         console.log(arr);
//     }
// }

function after(times, callback){
    let arr = [];
    return single => {
        arr.push(single);
        if(arr.length===times)callback(arr);
    }
};

let out = after(2, data=>{
    console.log(data);
})

fs.readFile(path.join(__dirname, "1.txt"), "utf8", (err, data)=>{
    if(err) return console.log(err);
    out(data);
});

fs.readFile(path.join(__dirname, "2.txt"), "utf8", (err, data)=>{
    if(err) return console.log(err);
    out(data);
});