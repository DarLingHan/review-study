/**
 * 1.数组常用方法
 * a.添加/删除元素
 * push()
 * pop() 从结尾提取元素
 * shift() 从开头提取元素
 * unshift() 从开头插入元素
 * splice(pos, deletcount, .items)
 * slice(start, end) 数组截取返回新数组
 * concat(..items) 复制当前数组并添加新元素 返回新数组
 * 
 * b.查询元素
 * indexOf/lastIndexOf(items, pos) //无返回值 -1
 * includes(value) -- 如果数组有value，则返回true，否则false
 * find/filter -- 通过函数过滤 返回符合find函数的第一个值 或 filter函数的全部值
 * findIndex和find类似，但返回索引而不是值
 * 
 * c.转换数组
 * map(func) --从每个元素调用func的结果创建一个新数组
 * sort() 倒序
 * reverse() 反转
 * split/join 
 * reduce 从每个元素调用func计算数组上的单个值并在调用之间传递中间值
 * 
 * d.迭代元素
 * forEach
 * 
 * e.其他
 * Array.isArray(arr)
 * arr.some(fn)/arr.ervery(fn)
 * arr.fill(value, start, end)
 * arr.copyWithin(target, start, end)
 */

//  demo
// 1.生成1-100的数组
let arr100 = new Array(100).fill(0).map((item, index) => index + 1)
// console.log(arr100)

// 交换变量
let name = {
    names: 'han'
}
let age = {
    ages: 18
}
let [name2, age2] = [age, name]
// console.log([name2, age2])

// 数组深拷贝
const arr = [1, 2, 3]
const arrClone = [...arr]
const arrFrom = Array.from(arr)
const arrSlice = arr.slice(0, arr.length)
arr.push(4)
// console.log(arr)
// console.log(arrClone)
// console.log(arrFrom)
// console.log(arrSlice)

// 数组合并
let arr1 = [1, 2]
let arr2 = [3, 4]
// console.log(arr1.concat(arr2))
// console.log([...arr1, ...arr2])

// 数组去重
let arrDiff = [1, 2, 2, 4, 4, 5]
// console.log(new Set(arrDiff))
// console.log([...new Set(arrDiff)])

// 数组取交集、差集
let arr3 = [1, 3, 3, 5, 7, 8]
let arr4 = [1, 4, 7, 8, 9]
let dupliValues = [...new Set(arr3)].filter(item => arr4.includes(item))
let noValues = [...new Set([...arr3, ...arr4])].filter(item => !arr3.includes(item) || !arr4.includes(item))
// console.log(dupliValues)
// console.log(noValues)

// 数组转对象
let objArr = [1, 2, 4]
// console.log({...objArr})
// 对象转数组 不能用... 因为obj不可迭代
// let obj = {0: 0, han: 1, length: 2} // [0, undefined]
let obj = {0: 0, 1: 1, length: 2} // [0, undefined]
// console.log(Array.from(obj))


// reduce应用

// 后端返回数据
const data = {
    'if _ then s9': [
        '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
        '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
        '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生'
        ],
    'if C then s4': [
        '当有条件时时,结构构件满足要求,要求属于安全性、适用性和耐久性',
        '当有条件时时,住宅结构满足要求,要求属于安全性、适用性和耐久性'
    ]
}
// console.log(Object.entries(data))
let returnHtml = Object.entries(data).reduce((pre, cur) => {
    // console.log(pre)
    // console.log(cur)
    let childHtml = cur[1].reduce((childPre, childCur) => `${childPre}<p>${childCur}</p>`, '')
    return `
        ${pre}
        <li>
            <p>${cur[0]}</p>
            ${childHtml}
        </li>
    `
}, '')
console.log(returnHtml)
