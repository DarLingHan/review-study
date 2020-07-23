let MyPromise = require("./MyPromise");

let p = new MyPromise((resovle, reject)=>{
    setTimeout(() => {
        resovle(123);
    }, 3000);
});

p.then(data=>{
    console.log(data);
}, err=>{
    console.log(err);
}).then(data=>{
    
})
