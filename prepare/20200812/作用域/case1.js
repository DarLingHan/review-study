var length = 10

function fn () {
    console.log(this.length)
}

var obj = {
    length: 5,
    method: function (fn) {
        console.log('in', this.length)
        fn()
        console.log(arguments[0])
        arguments[0]()
    }
}

obj.method(fn, 1)

/**
 *
1，method函数被当成对象的方法调用，所以this指向调用该函数的对象

2，fn函数被当成普通函数调用，所以函数内的this指向全局对象window

3，一样是被当成对象调用，调用对象是arguments

 */