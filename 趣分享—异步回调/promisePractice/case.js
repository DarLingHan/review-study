let Promise = require('./testPromise2021-05-07')

let myPromise = new Promise((resolve, reject) => {
    // resolve(1);
    // setTimeout(() => {
    //     resolve(100);
    // }, 1000)
    reject(3)
    // throw new Error('错了')
})
myPromise.then(res => {
    console.log('成功的输出', res)
    // return new Promise((resolve, reject) => {
    //     resolve(11)
    // })
}, rej => {
    console.log('失败的输出', rej)
}).then(res => {
    console.log('成功的输出2', res)
}, rej => {
    console.log('失败的输出2', rej)
}).catch(err => {
    console.log('catch-error', err)
})

// myPromise.catch(err => {
//     console.log('catch-error', err)
// })