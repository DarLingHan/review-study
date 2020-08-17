function Promise (exector) {
    this.status = 'pending'
    this.value = ''
    this.reason = ''
    this.onFullFilledArr = []
    this.onRejectFilledArr = []
    let self = this
    function resolve (value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
            // 发布
            self.onFullFilledArr.forEach(fn => fn(self.value))
        }
    }
    function reject (reason) {
        if (self.status === 'pending') {
            self.reason = reason
            self.status = 'rejected'
            // 发布
            self.onRejectFilledArr.forEach(fn => fn(self.reason))
        }
    }
    try {
        exector(resolve, reject)
    } catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFullFilled, onRejectFilled) {
    if (this.status === 'resolved') {
        onFullFilled(this.value)
    }
    if (this.status === 'rejected') {
        onRejectFilled(this.reason)
    }
    if (this.status === 'pending') {
        console.log('同步的异步执行')
        // 订阅
        this.onFullFilledArr.push(onFullFilled)
        this.onRejectFilledArr.push(onRejectFilled)
    }
}

module.exports = Promise