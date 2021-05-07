// bind的作用

// 1.改变原函数的this指向，返回原函数的拷贝

// 2.绑定函数被调用时，bind的额外参数放在实参之前传递给绑定的方法，预设一些参数

// 3. new 操作符的时候会修改this指向，this指向无效
// https://zhuanlan.zhihu.com/p/85438296

var obj = {name: 'han'}
Function.prototype.myBind = function () {
    var that = this
    var fn = arguments[0] // 函数
    var args = Array.prototype.slice.call(arguments, 1) // 第二个及以后的参数
    var fBound = function() {
        var allArgs = args.concat(Array.prototype.slice.call(arguments))
        return that.apply(this instanceof fBound ? this : fn, allArgs)
    }
    // 希望修改fBound的原型后 greeting的原型不会被修改
    // fBound.prototype = that.prototype
    var fNOP = function () {}
    if (that.prototype) {
        fNOP.prototype = that.prototype
    }
    fBound.prototype = new fNOP()
    return fBound
}

var greeting = function () {
    this.value = 'Ling'
    console.log(`welcome ${this.name}-${this.value}`)
}

// console.log(greeting.myBind(obj)())

// var objGreeting = greeting.bind(obj)
// var newObj = new objGreeting()
// console.log(newObj.value)
var objGreeting = greeting.myBind(obj)
var newObj = new objGreeting()
console.log(newObj.value)
// console.log(newObj.name)
