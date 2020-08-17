const Promise = require('./promiseEs5')
const fs = require('fs')
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

Promise.race([read("./name.txt"), 1, 2, 3]).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e)
})