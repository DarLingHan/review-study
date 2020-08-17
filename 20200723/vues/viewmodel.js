let obj = {
    name: 'hanling',
    age: 20,
    province: {
        address: 'shanghai'
    }
}
let objArr = [1,3,'aa']
// AOP
let methods = ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse']
methods.forEach(method => {
    let oldMethod = Array.prototype[method]
    Array.prototype[method] = function () {
        notify('数组更新了')
        oldMethod.call(this, ...arguments)
    }
})

function notify (msg) {
    console.log(msg)
}

function observe (obj) {
    if (typeof obj === 'object') {
        for (let key in obj) {
            defineReactive(obj, key, obj[key])
        }
    }
}

function defineReactive (obj, key, value) {
    observe(value) // 对象的属性值还是一个对象
    Object.defineProperty(obj, key, {
        get () {
            return value
        },
        set (newValue) {
            if (newValue !== value) {
                observe(newValue)
                notify('对象更新了')
                value = newValue
            }
        }
    })
}
function $set(obj, key, value) {
    defineReactive(obj, key, value)
}

observe(obj);
observe(objArr);

// 1.
// obj.name = 'fighting';

// 2.
// obj.province.address = 'beijing';

// 3.
// obj.province = {
//     address: 'nanjing'
// }
// obj.province.address = 'beijing'

// 4.
// obj是一个数组
// objArr.push(123)

// 5.新的属性没有监听
// obj.sale = 'bag'
$set(obj, 'sale', 'bag')
obj.sale = 'cap'
console.log(obj)
