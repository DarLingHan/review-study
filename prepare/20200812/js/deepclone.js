function deepClone(obj, hash = new WeakMap()) {
    if (obj === null) return obj;
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (typeof obj !== "object") return obj
    if (hash.has(obj)) return hash.get(obj)
    let cloneRes = new obj.constructor // 数组或对象
    hash.set(obj, cloneRes)
    // 循环
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            cloneRes[i] = deepClone(obj[i], hash)
        }
    }
    return cloneRes
}

let obj = {
    name: 'han',
    province: {
        age: 18
    },
    mood: undefined,
    other: null
}
obj.x = obj

let obj2 = deepClone(obj)
obj.name = 'ling'

console.log(obj2)
