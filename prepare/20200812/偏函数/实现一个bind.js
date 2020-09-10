function bind () {
    let arr = []
    return function () {
        if (arguments.length === 0) {
            return arr
        } else {
            arr.push(arguments[0])
            return arguments.callee
        }
    }
}

console.log(bind()(20))
console.log(bind()(20)())