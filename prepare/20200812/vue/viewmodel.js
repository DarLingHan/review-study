// vue的双向绑定原理
let obj = {
    name: 'han',
    address: {
        province: 'jiangsu'
    },
    arr: [1, 2]
}

function notify () {
    console.log('更新了')
}

function observe(obj) {
    for (let i in obj) {
        defineProperty(i, obj[i], obj)
    }
}

function defineProperty(key, val, obj) {
    if (typeof val === 'object') {observe(val)}
    Object.defineProperty(obj, key, {
        get () {
            return val
        },
        set (newVal) {
            if (typeof newVal === 'object') {observe(newVal)}
            if (newVal !== val) {
                val = newVal
                notify()
            }
        }
    })
}

// 对数组方法对处理
let methods = ['splice', 'slice', 'push', 'shift', 'unshift', 'pop', 'reverse']
methods.forEach(method => {
    let oldMethod = Array.prototype[method]
    Array.prototype[method] = function () {
        notify()
        oldMethod.call(this, ...arguments)
    }
})

// 添加新属性时 也添加上get、set方法
function $set(obj, key, val) {
    defineProperty(key, val, obj)
}
observe(obj)

// console.log(obj)
// obj.name = 'ling'
// obj.address.province = 'shanghai'
// obj.address = {
//     test: 'suzhou'
// }

// obj.address.test = 'hangzhou'

// obj.arr.push(3)
$set(obj, 'newPro', 'test')
obj.newPro = 'test2'
