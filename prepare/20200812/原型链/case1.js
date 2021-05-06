function f1 () {
    this.name = 'f1'
}
f1.prototype.getF1Name = function () {
    return this.name
}
function f2 () {
    this.name = 'f2'
}
f2.prototype = new f1()
function f3 () {
    this.name = 'f3'
}
f3.prototype = new f2()

var allF1F2F3 = new f3()
console.log(allF1F2F3.getF1Name())