// 自定义promise

function Promise (exector) {
  this.status = 'pending';
  this.value = '';
  this.reason = '';
  this.fullFilledCallbacks = [];
  this.rejectedCallBacks = [];
  let self = this;
  function resolve (value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'fullfilled';
      self.fullFilledCallbacks.forEach(fn => fn());
    }
  }
  function reject (reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.rejectedCallBacks.forEach(fn => fn());
    }
  }
  try {
    exector(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
  if (this.status === 'fullfilled') {
    onFullfilled(this.value);
  }
  if (this.status === 'rejected') {
    onRejected(this.reason);
  }
  if (this.status === 'pending') {
    this.fullFilledCallbacks.push(() => {
      onFullfilled(this.value);
    });
    this.rejectedCallBacks.push(() => {
      onRejected(this.reason);
    });
  }
}

module.exports = Promise;