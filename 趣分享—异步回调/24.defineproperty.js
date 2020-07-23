// set get -> 对象的setter getter
// vue 数据劫持 （把所有的属性都改成 get/set)
function notify () {
    // 更新视图
    console.log('更新了视图～');
}
let obj = {
    name: 'hanling',
    age: 28,
    location: {
        province: 'shanghai'
    }
}

function observer (obj) {
    if (typeof obj != 'object') {return obj};
    for (let key in obj) {
        defineVueactive(obj, key, obj[key]);
    }
}

function defineVueactive(obj, key, value) {
    // 2.递归 解决属性里还有属性问题 给province也加上get set
    observer(value);
    Object.defineProperty(obj, key, { // 4.object.defineproperty 只针对对象 对数组没有效果
        get () {
            return value;
        },
        set (val) {
            // 3.赋值与原始值不相等 处理
            if (val !== value) {
                // 2.判断是否是常值或{ }这样的对象 解决赋值一个新的对象 丢失get set方法的问题
                observer(val);
                notify();
                value = val;
            }
        }
    })
}

observer(obj);
// obj.name = 'qiancheng';
// 1.更新里面的province值 不通知问题
// obj.location.province = 'beijing';
// 2.直接设置一个对象 get/set就设置不成功了
// obj.location = {
//     province: 'beijing'
// }
// 第二次没有成功触发
// obj.location.province = 'chengdu'
// 3.如果赋值 与 原始值相等 则不处理
// 4.object.defineproperty 只针对对象 对数组没有效果
obj.location = [1,2,3]
// obj.location[2] = 4 // 做到了更新
// obj.location.push(5) // location长度不能改变了 做不到更新
// 希望数组对slice pop shift unshift reverse方法做到更新的效果
let methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'splice'];
methods.forEach(method => {
    // aop 面相切面
    let oldMethod = Array.prototype[method];
    Array.prototype[method] = function () {
        notify();
        oldMethod.call(this, ...arguments);
    }
});
obj.location.push(6);
obj.location.push(7);