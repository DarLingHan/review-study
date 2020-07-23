let obj = {
    name: 'zhanan',
    age: 22,
    province: {
        address: 'taizhou'
    }
}
let objArr = [1, {name: 'moods'}, 3]
let methods = ['splice', 'push', 'pop', 'shift', 'unshift', 'reverse']
methods.forEach(method => {
    let oldMethod = Array.prototype[method]
    Array.prototype[method] = function () {
        notify('数组更新了!')
        oldMethod.call(this, ...arguments)
    }
})


function notify (msg) {
    console.log(msg)
}

function observer(obj) {
    // 如果是数组里的对象属性发生变化
    // 数组里的对象要加上get set方法
    /**自己的一点猜想 */
    if (Array.isArray(obj)) {
        for (let arr in obj) {
            observer(obj[arr])
        }
    }
    /**自己的一点猜想 */


    if (typeof obj === 'object') {
        for (let key in obj) {
            defineVueActive(obj, key, obj[key])
        }
    }
}

function defineVueActive(obj, key, value) {
    observer(value)
    Object.defineProperty(obj, key, {
        get () {
            return value
        },
        set (newValue) {
            if (newValue !== value) {
                observer(newValue)
                notify('数据更新了!')
                value = newValue
            }
        }
    })
}

observer(obj);
observer(objArr);

// obj.name = 'goodbye'
// obj.province.address = 'shanghai'
// obj.province = {
//     address: 'shanghai'
// }
// obj.province.address = 'yunnan'
// objArr.push(123)
objArr.splice(1, 1, {name: '数组里的对象属性变更触发通知'})
// console.log(obj)
// console.log(objArr[1])

