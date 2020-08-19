// function sum() {
//     let arr = []
//     return function fn() {
//         if (arguments.length === 0) {
//             return arr
//         } else {
//             arr.push(arguments[0])
//             // return arguments.callee
//             return fn
//         }
//     }
// }

function sum() {
    let arr = []
    return function () {
        if (arguments.length === 0) {
            return arr
        } else {
            arr.push(arguments[0])
            return arguments.callee
        }
    }
}

// console.log(sum()(20)())
console.log(sum()(20))

// 延迟执行——不断的柯里化，累计之前的参数，最后返回执行的结果
// 避免代码重复调用
// 这个返回的函数包含了之前的参数 不要重复传