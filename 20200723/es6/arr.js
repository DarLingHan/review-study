let obj1 = {name: 'han'}
let obj2 = {age: 18, hobbit: {eat: 'fish'}}

let obj = {...obj1, ...obj2}
obj2.age = 19
// obj2.hobbit.eat = 'chicken' // 对象的对象是浅拷贝了
// console.log(obj)

// 解决方法1 对象转换为字符串 字符串再转换为对象 但是null、undfined转换不过来
let objStr = JSON.stringify({...obj1, ...obj2})
let objNew = JSON.parse(objStr)
obj.hobbit.eat = 'friut'
console.log(objNew)

// 解决方法2 深层拷贝
require('./clone')

let objAssign = Object.assign({}, obj1)
obj1.name = 'fighting'
console.log(objAssign)
