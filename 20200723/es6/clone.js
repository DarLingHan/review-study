let obj = {
    name: 'han',
    province: {
        address: 'jiangsu'
    }
}

function cloneObj (obj, hash=new WeakMap()) {
    if (obj === null) { return null } // null == undefined
    if (obj instanceof RegExp) { return new RegExp(obj) }
    if (obj instanceof Date) return new Date(obj)
    // 基本数据类型 function Symbol
    if (typeof obj !== 'object') return obj
    if (hash.has(obj)) return hash.get(obj);
    // 要不是数组 要不是对象
    // 如果赋予的值是对象，就把这个对象放到weakmap中
    let cloneRes = new obj.constructor;
    hash.set(obj, cloneRes)
    for (let key in obj) {
        cloneRes[key] = cloneObj(obj[key], hash)
    }
    return cloneRes
}

// let objnew = cloneObj(obj)
// obj.name = 'ling'
// obj.province.address = 'shanghai'
// console.log(objnew)

// 循环引用
obj.tt = obj
let objtt = cloneObj(obj)
console.log(objtt)
