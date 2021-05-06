
function test() {
    var i = 0;
    return function () {
        // console.log(++i)
        console.log(i++)
    }
}

var f1 = test()
var f2 = test()
f1()
f1()
f2()