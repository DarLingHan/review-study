function Father (param) {
    this.name = 'father'
    this.age = 18
    this.param = param
}
Father.prototype.hobbit = 'swim'

// 原型链继承
function Child1 () {
    this.name = 'child'
}
Child1.prototype = new Father()
// console.log(new Child1().hobbit)

// 构造函数继承
function Child2 () {
    Father.call(this, 'params')
    this.name = 'child2'
}
// console.log(new Child2().hobbit)

// 组合继承
function Child3 () {
    Father.call(this, 'child3-params')
    this.name = 'child3'
}
Child3.prototype = new Father()
// console.log(new Child3().age)

// 寄生组合继承
function Child4 (param) {
    Father.call(this, param)   
}
(function () {
    let Super = function () {}
    Super.prototype = Father.prototype
    Child4.prototype = new Super()
})()
Child4.prototype.constructor = Child4
console.log(new Child4('child4-param').param)
console.log(Child4.prototype.constructor)