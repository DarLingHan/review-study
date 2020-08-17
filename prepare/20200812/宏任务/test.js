const { resolve, reject } = require("../promise/promiseEs5");

var a = '1';
console.log(a)


new Promise((resolve, reject) => {
    console.log(2)
    resolve(4)
    console.log(3)
    setTimeout(()=> {
        console.log(8)
    }, 0)
}).then(res => {
    console.log(6)
})

setTimeout(() => {
    console.log(5)
}, 0)


console.log(7)