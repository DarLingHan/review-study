class MyPromise1 {
    constructor(exector) {
        this.status = 'pending';
        this.value = ''
        this.reason = ''
    }
    resolve (value) {
        if (this.status === 'pending') {
            this.value = value
            this.status = 'resolved'
        }
    }
    reject (reason) {
        if (this.status === 'pending') {
            this.reason = reason
            this.status = 'rejected'
        }
    }
    exector(resolve, reject)
}

module.exports = MyPromise1