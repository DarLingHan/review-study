const { reject, resolve } = require("./promiseEs5")

function Promise (exector) {
    this.status = 'pending'
    this.value = ''
    this.reason = ''
    this.onFullfilledCallbacks = []
    this.onRejectedCallbacks = []
    let self = this
    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
            self.onFullfilledCallbacks.forEach(fn => fn())
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason
            self.onRejectedCallbacks.forEach(fn => fn())
        }
    }
    try {
        exector(resolve, reject)
    } catch (error) {
        reject(error)
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        // 循环引用
        throw new TypeError('循环引用')
    }
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let then = x.then
        if (typeof then === 'function') {
            then.call(x, y => {
                // resolve(y)
                resolvePromise(promise2, y, resolve, reject)
            }, r => {
                reject(r)
            })
        } else {
            // then: {}
            resolve(x)
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    let promise2 = new Promise((resolve, reject) => {
        if (this.status === 'resolved') {
            setTimeout(() => {
                try {
                    let x = onFullfilled(this.value)
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
            });
        }
        if (this.status === 'pending') {
            this.onFullfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFullfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            })
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                });
            })
        }
    })
    return promise2
}

Promise.prototype.catch = function (errCallback) {
    return this.then(null, errCallback)
}

Promise.resolve = function (value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    })
}

Promise.reject = function (reason) {
    return new Promise((resolve, reject) => {
        reject(reason)
    })
}

Promise.all = function (values) {
    return new Promise((resolve, reject) => {
        let arr = []
        let count = 0
        function processData(key, val) {
            arr[key] = val
            if (++count === values.length) {
                resolve(arr)
                // console.log(arr)
            }
        }
        for (let i in values) {
            let current = values[i]
            let then = current.then
            if (then && typeof then === 'function') {
                current.then(y => {
                    processData(i, y)
                }, r => {
                    reject(r)
                })
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