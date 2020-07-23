let p = new Promise((resolve, reject)=>{
    reject(123);
});

p.then(data=>{

}, err=>{
    console.log('err', err);
}).then(data=>{
    console.log("fins", data);
})