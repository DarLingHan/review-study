let obj = {
    name: 'han',
    province: {
        address: 'jiangsu'
    }
}

function cloneObj (obj) {
    if (obj === null) { return null } // null == undefined
    if (obj instanceof RegExp) { return new RegExp(obj) }
    if (obj instanceof Date) return new Date(obj)
    // 基本数据类型 function Symbol
    if (typeof obj !== 'object') return obj
    // 要不是数组 要不是对象
    let cloneRes = new obj.constructor;
    for (let key in obj) {
        cloneRes[key] = cloneObj(obj[key])
    }
    return cloneRes
}

let objnew = cloneObj(obj)
obj.name = 'ling'
obj.province.address = 'shanghai'

console.log(objnew)
