const Promise = require('./promiseEs5')
const fs = require('fs')
var promise = new Promise((resolve, reject) => {
    // resolve('success')
    // reject('fail')
    // throw new Error('其他未知错误')
    // setTimeout(() => {
    //     // resolve('异步resolve')
    //     // reject('异步reject')
    // }, 0)
    resolve(new Promise ((resolve, reject) => {
        resolve('100')
    }))
})

// promise.then(res => {
//     console.log('成功', res)
//     return new Promise((resolve, reject) => {
//         // resolve(res)
//         // reject('error')
//         setTimeout(()=> {
//             // resolve('异步成功')
//             reject('异步失败')
//         })
//     })
//     // throw new Error('抛出一个错误')
// }, rej => {
//     console.log('失败', rej)
// }).then(res => {
//     console.log('2成功', res)
// }, rej => {
//     console.log('2失败', rej)
// })

// 如果then方法中没有传成功或失败的回调函数
// promise.then().then().then().then(res => {

// }, rej => {

// })

// promise.then(null, err => {
//     throw err
// }).catch(e => {
//     console.log('e', e)
// })

// promise.then(data => {
//     console.log(data)
// })
function read (url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if (err) {return reject(err)}
            resolve(data)
        })
    })
}

Promise.all([read("./name.txt"), 1, 2, 3]).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e)
})
