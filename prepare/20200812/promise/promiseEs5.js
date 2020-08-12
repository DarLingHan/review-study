function Promise (exector) {
    this.status = 'pending'
    this.value = ''
    this.reason = ''
    let self = this
    function resolve (value) {
        if (self.status === 'pending') {
            self.status = 'resolved'
            self.value = value
        }
    }
    function reject (msg) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = msg
        }
    }
    exector(resolve, reject)
}

Promise.prototype.then = (onFullFilled, onRejected) => {
    if (this.status === 'resolved') {
        onFullFilled(this.value)
    }
    if (this.status === 'rejected') {
        onRejected(this.reason)
    }
}

module.exports = Promise