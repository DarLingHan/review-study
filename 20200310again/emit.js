// 发布订阅的模式实现 文件并行

function eventEmitter () {
    this._arr = []
}

// 订阅
eventEmitter.prototype.on = function (callback) {
    this._arr.push(callback)
}

// 发布
eventEmitter.prototype.emmit = function (key, val) {
    this._arr.forEach(fn => fn(key, val))
}

// 订阅
let results = {}
let env = new eventEmitter();
env.on((key, val) => {
    results[key] = val
    if (Object.keys(results).length === 2) {
        console.log(results)
    }
})

let fs = require('fs');
fs.readFile('./name.txt', 'utf-8', (err, data) => {
    // console.log(data);
    // 发布1
    env.emmit('name', data)
})
fs.readFile('./age.txt', 'utf-8', (err, data) => {
    // console.log(data);
    // 发布2
    env.emmit('age', data)
})