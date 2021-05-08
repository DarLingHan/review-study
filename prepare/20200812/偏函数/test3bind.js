Function.prototype.myBind = function () {
    var that = this
    var fn = arguments[0]
    console.log('arguments', arguments)
    var args = Array.prototype.slice.call(arguments, 1)
    console.log('args', args)
    var fBound = function () {
        var allArgs = args.concat(arguments)
        console.log('allArgs', allArgs)
        console.log('类型', this instanceof fBound)
        return that.apply(this instanceof fBound ? this : fn, allArgs)
    }
    // var newBound = function () {}
    // if (that.prototype) {
    //     newBound.prototype = that.prototype
    // }
    // fBound.prototype = new newBound()
    return fBound
}

let obj = {name: 'han'}
function doSth () {
    this.value = 'ling'
    console.log(this.name + this.value + arguments[0])
}
// console.log(doSth.bind(obj, 20)(3))
// console.log(doSth.myBind(obj, 20)(3))

// var objFuc = doSth.bind(obj, 20)
var objFuc = doSth.myBind(obj, 20)
var newFuc = new objFuc()
console.log(newFuc.value)