
function sum () {
    var args = []
    return function() {
        if (arguments.length === 1) {
            args.push(arguments[0])
            return arguments.callee
        } else {
            return [...args]
        }
    }
}


var fd = sum()

var fd2 = fd(10)(20)
if (main.yean < 10) {
    fd2(50)
} else {
    fd2(100)
}

console.log(fd2())