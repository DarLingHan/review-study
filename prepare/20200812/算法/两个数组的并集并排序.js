let arr1 = [1, 5, 10, 2, 6]
let arr2 = [3, 3, 9, 2, 4]

// 两个数组的并集
let arrs = [...new Set([...arr1, ...arr2])]
console.log(arrs)

