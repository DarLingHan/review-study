// 实现new的过程

function Test (name) {
    this.name = name
}

// console.log(new Test().name)

function newTest (fn, ...args) {
    let obj = Object.create(fn.prototype)
    let res = fn.apply(obj, args)
    return res instanceof Object ? res : obj
}

console.log(newTest(Test, 'han').name)
