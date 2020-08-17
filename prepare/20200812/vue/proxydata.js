// Reflect拦截Javascript的操作方法
// 所有的属性方法都是静态的

let obj = {
    name: 'han',
    address: {
        province: 'jiangsu'
    },
    arr: [1, 2]
}

function notify () {
    console.log('proxy更新了')
}

let handler = {
    get (target, key) {
        // 如果还是一个对象
        if (typeof target[key] === 'object' && typeof target[key] !== null) {
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target, key)
    },
    set (target, key, newVal) {
        // console.log(key)
        if (key === 'length') {return true}
        if (newVal !== target[key]) {
            notify()
            return Reflect.set(target, key, newVal)
        }
    }
}

let proxy = new Proxy(obj, handler)

// proxy.name = 'ling'
// proxy.address.province = 'aa'
proxy.arr.push(3)