var fs = require('fs');

function after (times, callback) {
    let results = {}
    return function (key, val) {
        results[key] = val
        if (--times == 0) { // times-- 存储新值 用旧值计算
            callback(results)
        }
    }
}
let fn = after(2, function (results) {
    console.log(results)
})

fs.readFile('./name.txt', 'utf-8', (err, data) => {
    if (err) return err;
    fn('name', data)
})

fs.readFile('./age.txt', 'utf-8', (err, data) => {
    if (err) return err;
    fn('age', data)
})