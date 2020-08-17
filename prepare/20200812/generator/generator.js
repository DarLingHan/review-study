// generator 生成器 -》 iterator迭代器;next{value. done}

// 写一个类数组-迭代器
let obj = {0:1, 1:2, 2:3, length: 3, [Symbol.iterator]: function () {
    let self = this
    let index = 0
    return {
        next () {
            return {
                value: self[index],
                done: index++ === self.length
            }
        }
    }
}}

// 写一个类数组-用生成器生成迭代器
let obj2 = {0:1, 1:2, 2:3, length:3, [Symbol.iterator]: function* () {
    let index = 0
    while(index !== this.length) {
        yield this[index++]
    }
}}


// 类数组转换成真正的数组
// 写一个类数组：有索引、长度、迭代器-》就可以展开成一个数组
// 1.扩展运算符
// 2.Array.from

function fn () {
    // 方法1
    // let arr = [...arguments]
    // 方法2
    // let arr = Array.from(arguments)
    // 写一个类数组
    let arr = [...obj]
    console.log(arr)
    console.log([...obj2])
    console.log(Array.isArray(arr))
}

fn(1, 2, 3)
