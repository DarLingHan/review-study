Function.prototype.before = function (callback) {
    return () => {
        callback()
        this()
    }
}

function test () {
    console.log('有一定功能了！')
}

var newFunc = test.before(() => {
    console.log('在test函数执行之前执行这段话')
})

newFunc()