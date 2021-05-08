var obj = {name: 'han'}
var greeting = function () {
    this.value = 'ling'
    let params = [].slice.call(arguments, 0)
    console.log(`hello ${this.name} ${this.value} ${params}`)
}

Function.prototype.myBind = function () {
    var that = this
    var fn = arguments[0]
    var args = [].slice.call(arguments, 1)
    var newBind = function () {
        var allArgs = args.concat([].slice.call(arguments, 0))
        //new调用就绑定到this上,否则就绑定到传入的objThis上
        that.apply(this instanceof newBind ? this : fn, allArgs)
    }
    return newBind
}

// greeting.bind(obj, 20)(3, 4, 5)
// greeting.myBind(obj, 24)(3, 4, 5)

var objInit = greeting.bind(obj, 30)
var initFunc = new objInit(5, 6, 7)
console.log(initFunc)