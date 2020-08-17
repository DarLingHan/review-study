let obj = {}
let other = ''
Object.defineProperty(obj, 'name', {
    enumerable: true, // 是否可枚举
    // writable: true, // 是否可修改值
    configurable: true, // 是否可删除
    // value: 'ksone',
    get() { // 读取
        console.log('正在读取...')
        return other;
    },
    set(val) { // 设置
        console.log('正在设置...')
        other = val;
    }
});
// obj.name = '666';
// delete obj.name;

obj.name = 'hanling';
// obj.name
console.log(obj.name);