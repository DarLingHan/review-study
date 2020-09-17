/*
 请实现filter函数，该函数功能如下：
 var ret = [1,2,3,4].filter((i) => {
   return i % 2 === 0;
});
 //结果：ret = [2,4];
*/

let arrs = [1,2,3,4]
Array.prototype.filter = function (fn) {
    return fn()
}

function test() {
    let ret = []
    for (let i in arrs) {
        if (arrs[i] % 2 === 0) {
            ret.push(arrs[i])
        }
    }
    return ret
}
console.log(arrs.filter(test))