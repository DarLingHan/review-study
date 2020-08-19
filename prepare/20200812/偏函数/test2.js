// 柯里化
// function fn(a, b, c) {
//     console.log(a+b+c)
// }
// // 预设一些值
// var fn1 = fn.bind(null, 'Dot')

// console.log(fn1('A', 'B', 'C'))
// console.log(fn1('A', 'B'))

// function add(x) {
//     return function (y) {
//         return x + y
//     }
// }

// console.log(add(3)(4))

// try {
//     console.log(a)
// } catch (error) {
//     console.log(error)
// }
// a = 1

// function add() {
//     return 20
// }
// console.log(add() + 10)
let arrayLike = {0: 1, 1: 2, length: 2}
var trueArr = Array.prototype.slice.call(arrayLike)
console.log(trueArr)
console.log(Array.isArray(trueArr))
