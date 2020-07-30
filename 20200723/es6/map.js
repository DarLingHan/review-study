/**
 * map
 * 一种数据结构
 * 有key 不能房重复的
 */
let map = new Map();
map.set('name', 'han')
map.set('name', 'ling')
map.set('age', '18')

// console.log(map, map.size)

// key可以是对象（引用类型）
// 对象的key 是基础数据类型
let obj = {name: 'name'}
map.set(obj, 'hanling')
// console.log(map)
obj = null
// console.log(map)
console.log(map.keys(), map.values(), map.entries(), map.has('name'))

// weakmap
let obj2 = {tes: 123}
let map2 = new WeakMap(); //weakmap的key只能是对象类型
map2.set(obj2, 'fighting') // obj引用的空间被set所用
obj2 = null // 把obj制为null 但是空间还是存在的
console.log(obj2)
console.log(map2)
