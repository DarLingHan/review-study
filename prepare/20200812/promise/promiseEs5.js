
// 链式调用 所以then返回的还是一个新的promise
function Promise (exector) {
    this.status = 'pending'
    this.value = ''
    this.reason = ''
    this.onFullFilledArr = []
    this.onRejectFilledArr = []
    let self = this
    function resolve (value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
            self.onFullFilledArr.forEach(fn => fn());
        }
    }
    function reject (msg) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = msg
            self.onRejectFilledArr.forEach(fn => fn())
        }
    }
    try {
        exector(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
function resolvePromise (promise2, x, resolve, reject) {
    if (promise2 === x) {throw new TypeError('循环引用')}
    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        let called;
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y=>{
                    if(called) return
                    called = true
                    // resolve(y)
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if(called) return
                    called = true
                    reject(r)
                })
            } else {
                resolve(x)
            }
        } catch (error) {
            if(called) return
            called = true
            reject(error)
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onFullFilled, onRejected) {
    onFullFilled = typeof onFullFilled === 'function' ? onFullFilled : val=>val
    onRejected = typeof onRejected === 'function' ? onRejected : err =>{ throw err}
    let promise2 = new Promise((resolve, reject) => {
        if (this.status === 'resolved') {
            setTimeout(() => {
                try {
                    let x = onFullFilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        }
        if (this.status === 'rejected') {
            setTimeout(() => {
                try {
                    let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            })
        }
        if (this.status === 'pending') {
            this.onFullFilledArr.push(()=> {
                setTimeout(() => {
                    try {
                        let x = onFullFilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
            this.onRejectFilledArr.push(()=>{
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
        }
    })
    return promise2
}

Promise.prototype.catch = function(errCallback) {
    return this.then(null, errCallback)
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

Promise.all = function (values) {
    return new Promise ((resolve, reject) => {
        let arr = []
        let count = 0
        function processData(key, val) {
            arr[key] = val
            if (++count === values.length) {
                resolve(arr)
            }
        }
        for (let i in values) {
            let current = values[i]
            let then = current.then
            if (then && typeof then === 'function') {
                current.then(y => {
                    processData(i, y)
                }, reject)
            } else {
                processData(i, current)
            }
        }
    })
}

Promise.race = function (values) {
    return new Promise((resolve, reject) => {
        for (let i in values) {
            let current = values[i]
            let then = current.then
            if (then && typeof then === 'function') {
                current.then(y => {
                    resolve(y)
                }, reject)
            } else {
                resolve(current)
            }
        }
    })
}

module.exports = Promise
