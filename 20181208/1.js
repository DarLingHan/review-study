
let p = new Promise((resolve, reject)=>{
    //同步
    //todo 
    //pending
    // if(Math.random()>0.5) resolve('买');
    // reject('不买');
    resolve(123);
});

p.then(data=>{
    console.log("success", data); // 123
}).then(data=>{
    console.log("second", data); // 
}).catch(err=>{
    console.log(err);
})

p.then(data=>{
    console.log("second then", data); // 123
})


