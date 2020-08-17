const Promise = require('./promiseEs52')
const fs = require('fs')
const { resolve, reject } = require('./promiseEs5')

// let promise = new Promise((resolve, reject) => {
//     // resolve(100)
//     reject(200)
//     // setTimeout(() => {
//     //     // resolve(300)
//     //     reject(400)
//     // })
// })

// promise.then(res => {
//     console.log(res)
//     // return new Promise((resolve, reject) => {
//     //     // resolve(res)
//     //     reject('error')
//     // })
//     throw new Error('error')
// }, rej => {
//     console.log(rej)
// }).then(res => {
//     console.log('2res', res)
// }, rej => {
//     console.log('2rej', rej)
// })

// promise.then().then().then(res => {
//     console.log(res)
// }, rej => {
//     console.log(rej)
// })

// promise.catch(err => {
//     console.log(err)
// })

// Promise.resolve(100).then(res => {
//     console.log(res)
// })

// Promise.reject(200).catch(err => {console.log(err)})


// function read (url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(url, 'utf8', (err, data) => {
//             if (err) {return reject(err)}
//             resolve(data)
//         })
//     })
// }
// Promise.all([1, 2, read('./name.txt')]).then(res => {
//     console.log(res)
// }, rej => {
//     console.log(rej)
// })
// Promise.race([1, 2, read('./name.txt')]).then(res => {
//     console.log(res)
// }, rej => {
//     console.log(rej)
// })
function promisify (fn) {
    return function () {
        return new Promise((resolve, reject) => {
            fn(...arguments, (err, data) => {
                if (err) {reject(err)}
                resolve(data)
            })
        })
    }
}
let read = promisify(fs.readFile)
let write = promisify(fs.writeFile)
// write('./name2.txt', 'love')

Promise.all([1, 2, read('./name.txt', 'utf8'), write('./name2.txt', 'life')]).then(res => {
    console.log(res)
}, rej => {
    console.log(rej)
})
