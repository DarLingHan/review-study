// 数组去重，map，时间复杂度O(n)
const arrUnique = (arr) => {
    let mapArr = new Map();
    for (let i=0; i< arr.length; i++) {
        mapArr.set(arr[i], arr[i])
    }
    return [...mapArr.values()]
}

console.log(arrUnique([9,9,1,3,6,2,2]))

// 数组去重 set 空间复杂度O(1)
console.log([...new Set([9,9,1,3,6,2,2])])

// 数组去重 循环+indexOf/includes 时间复杂度O(n2)
function arrN (arr) {
    let res = []
    for (let i in arr) {
        if (res.indexOf(arr[i]) <= -1) {
            res.push(arr[i])
        }
    }
    return res
}
function arrN2 (arr) {
    let res = []
    for (let i in arr) {
        !res.includes(arr[i]) && res.push(arr[i])
    }
    return res
}
console.log(arrN([9,9,1,3,6,2,2]))
console.log(arrN2([9,9,1,3,6,2,2]))
