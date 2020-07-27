/**
 * Set
 * 一种存储结构
 * 一种集合
 * new Set()参数必须是数组 可迭代
 * 无序 不是数组 是一个object 没有索引 不能重复
 */

 let set = new Set([1, 2, 3])
 set.add(4)
 set.delete(1)
//  console.log(set)
//  console.log(set.keys(), set.values(), set.entries())

//  有迭代器[Symble.iterator]时
// 可以for of
// 可以用展开运算符

// for (let s of set) {
//     console.log(s)
// }

let arr1 = [1, 3, 5, 5, 7]
let arr2 = [3, 7, 9, 10]
// 数组去重
console.log([...new Set(arr1)])
// 并集
console.log([...new Set([...arr1, ...arr2])])
// 交集
console.log([...new Set(arr1)].filter(item => arr2.includes(item)))
// 差集
console.log([...new Set([...arr1, ...arr2])].filter(item => !arr2.includes(item) || !arr1.includes(item)))
