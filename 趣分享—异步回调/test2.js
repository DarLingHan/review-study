function Promise (exector) {
  this.status = 'pending';
  this.value = '';
  this.reason = '';
  this.fullFilledCallbacks = [];
  this.rejectedCallbacks = [];
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
      self.rejectedCallbacks.forEach(fn => fn());
    }
  }
  // 执行器同步执行
  try {
    exector(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError('循环引用');
  }
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          resolve(y);
        }, r => {
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
  let promise2 = new Promise((resolve, reject) => {
    if (this.status === 'fullfilled') {
      setTimeout(()=> {
        try {
          let x = onFullfilled(this.value);
          resolvePromise(promise2, x, resolve, reject);
        }catch (e) {
          reject(e);
        }
      });
    }
    if (this.status === 'rejected') {
      setTimeout(()=> {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        }catch (e) {
          reject(e);
        }
      });
    }
    if (this.status === 'pending') {
      this.fullFilledCallbacks.push(() => {
        setTimeout(()=> {
          try {
            let x = onFullfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          }catch (e) {
            reject(e);
          }
        });
      });
      this.rejectedCallbacks.push(() => {
        setTimeout(()=> {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          }catch (e) {
            reject(e);
          }
        });
      });
    }
  });
  return promise2;
};

module.exports = Promise;