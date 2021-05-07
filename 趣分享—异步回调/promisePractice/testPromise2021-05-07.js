function Promise(exector) {
    this.status = 'pending'
    this.value = ''
    this.reason = ''
    this.onFullfilledCallbacks = []
    this.onRejectdCallbacks = []
    var that = this
    function resolve (val) {
        if (that.status == 'pending') {
            that.status = 'fullfilled'
            that.value = val
            that.onFullfilledCallbacks.forEach(fn => fn());
        }
    }
    function reject (val) {
        if (that.status == 'pending') {
            that.status = 'rejected'
            that.reason = val
            that.onRejectdCallbacks.forEach(fn => fn())
        }
    }
    try {
        exector(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    if (x != null && (typeof x == 'object' || typeof x == 'function')) {
        let then =  x.then
        if (typeof then == 'function') {
            then.call(x, y => {
                resolve(y)
            }, r=> {
                reject(r)
            })
        }
    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onFullfilled, onRejectd) {
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : val => val;
    onRejectd = typeof onRejectd === 'function' ? onRejectd : err => {throw err};
    let promise2 = new Promise((resolve, reject) => {
        if (this.status == 'fullfilled') {
            setTimeout(() => {
                let x = onFullfilled(this.value)
                resolvePromise(promise2, x, resolve, reject)
            })
        }
        if (this.status == 'rejected') {
            setTimeout(() => {
                let x = onRejectd(this.reason)
                resolvePromise(promise2, x, resolve, reject)
            })
        }
        if (this.status == 'pending') {
            this.onFullfilledCallbacks.push(() => {
                setTimeout(() => {
                    let x = onFullfilled(this.value)
                    resolvePromise(promise2, x, resolve, reject)
                })
            })
            this.onRejectdCallbacks.push(() => {
                setTimeout(() => {
                    let x = onRejectd(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                })
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
        let count = 0
        let arr = []
        function processData(key, val) {
            arr[key] = val
            if (++count == values.length) {
                resolve(arr)
            }
        }
        for (let i=0; i<values.length; i++) {
            let current = values[i]
            let then = current.then
            if (then && typeof then === 'function') {
                current.then(r => {
                    processData(i, r)
                }, j => {
                    reject(current)
                })
            } else {
                processData(i, current)
            }
        }
    })
}

Promise.race = function (values) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i<values.length; i++) {
            let current = values[i]
            let then = current.then
            if (then && typeof then === 'function') {
                current.then(r => {
                    resolve(r)
                }, reject)
            } else {
                resolve(current)
            }
        }
    })
}

module.exports = Promise
