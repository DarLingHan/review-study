const Promise = require('./promiseEs5')
var promise = new Promise((resolve, reject) => {
    // resolve('success')
    reject('fail')
})

promise.then(res => {
    console.log('成功', res)
}, rej => {
    console.log('失败', rej)
})