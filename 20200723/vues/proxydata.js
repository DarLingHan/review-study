function notify (msg) {
    console.log(msg)
}

let obj = {
    name: 'hanling',
    province: {
        address: 'shanghai'
    },
    arr: [1, 2]
}
let handler = {
    get (target, key) {
        // 如果属性的值还是一个对象继续代理
        if (typeof target[key] === 'object' && typeof target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key)
    },
    set (target, key, value) {
        // 如果是数组
        if (key === 'length') { return true }
        notify(`${key}更新为${value}`)
        return Reflect.set(target, key, value)
    }
}

let proxy = new Proxy(obj, handler)

// proxy.name = 'fighting'
// proxy.province.address = 'shanghai'
proxy.arr.push(123)
