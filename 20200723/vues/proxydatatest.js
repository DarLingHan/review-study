let obj = {
    name: 'hanling',
    province: {
        address: 'shanghai'
    },
    arr: [1, 2]
}

function notify (msg) {
    console.log(msg)
}

let handler = {
    get (target, key) {
        if (typeof target[key] === 'object' && typeof target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key)
    },
    set (target, key, value) {
        if(key === 'length') {return true}
        notify(`${key}更新为${value}`)
        return Reflect.set(target, key, value)
    }
}

let proxy = new Proxy(obj, handler)

// proxy.name = '趣头条'
// proxy.province.address = 'qtt'
proxy.arr.push('数组更新')
proxy.arr[1] = '22'
console.log(proxy.arr)
