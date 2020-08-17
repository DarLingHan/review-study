// promise是一个构造函数
function Promise(exector) {
  this.status = 'pending'; // 状态
  this.value = ''; // 成功的值信息
  this.reason = ''; // 失败的信息
  this.fullFilledCallbacks = []; // 成功之后的回调 中介的角色
  this.rejectedCallbacks = []; // 失败之后的回调 中介的角色
  let self= this;
  function resolve(value) {
    if(self.status === 'pending') {
      self.value = value;
      self.status = 'fullfilled';
      self.fullFilledCallbacks.forEach(fn => fn());
    }
  }
  function reject(reason) {
    if(self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.rejectedCallbacks.forEach(fn => fn());
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
    // 订阅
    this.fullFilledCallbacks.push(() => {
      onFullfilled(this.value);
    });
    this.rejectedCallbacks.push(() => {
      onRejected(this.reason);
    });
  }
}

module.exports = Promise;