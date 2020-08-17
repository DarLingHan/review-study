
var Promise = require('./myPromiseES5.js')
var promise = new Promise((resolve, reject) => {
    // resolve(100)
    // reject(500)
    // throw new Error('其他未知错误')
    setTimeout(()=> {
        resolve(200)
    }, 1000)
})

promise.then(data => {
    console.log('success', data)
}, err => {
    console.log('error', err)
})