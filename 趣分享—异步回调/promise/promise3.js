// promise是一个构造函数
function Promise(exector) {
  this.status = 'pending'; // 状态
  this.value = ''; // 成功的值信息
  this.reason = ''; // 失败的信息
  this.fullFilledCallbacks = []; // 成功之后的回调 中介的角色
  this.rejectedCallbacks = []; // 失败之后的回调 中介的角色
  let self= this;
  function resolve(value) {
    // 判断value是不是promise
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }
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

function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError('循环引用');
  }
  // 如果x返回的是一个普通值,那就直接resolve
  if (x!=null &&(typeof x === 'object' || typeof x === 'function')) {
    // 看当前的promise有木有then方法,有可能报错
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') { // 是一个promise
        then.call(x, y => {
          if (called) return;
          called = true;
          // resolve(y);
          // 如果y依然是个promise,递归解析
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return; // 防止调用失败又调用成功
          called = true;
          reject(r);
        });
      } else {
        resolve(x); // 普通值
      }
    } catch (e) {
      if (called) return; // 防止调用出错后，继续调用成功的逻辑
      called = true;
      reject(e);
    }
  } else {
    resolve(x); // 普通值
  }
}

Promise.prototype.then = function (onFullfilled, onRejected) {
  // 如果then的方法中没有传入成功或失败的回调函数，就依次往下传
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : val => val;
  onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err};
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
      // 订阅
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
}

// 延迟对象
// npm install promises-aplus-tests
Promise.deferred = function () {
  let dtd = {};
  dtd.promise = new Promise((resolve, reject) => {
    dtd.resolve = resolve;
    dtd.reject = reject;
  });
  return dtd;
}

// catch方法
Promise.prototype.catch = function (errCallBack) {
  return this.then(null, errCallBack);
}

// finally
// 无论如何都会执行

// resolve
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  });
}

// reject 
Promise.reject = function (reason) {
  return new Promise ((resolve, reject) => {
    reject(reason);
  });
}

// all
Promise.all =  function(values) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let count = 0;
    function processData(key, val) {
      arr[key] = val;
      if (++count === values.length) {
        resolve(arr)
      }
    }
    for (let i=0; i<values.length; i++) {
      let current = values[i];
      // 判断当前项是promise还是普通值
      let then = current.then;
      if (then && typeof then === 'function') {
        current.then(y=>{
          processData(i, y);
        }, reject);
      } else {
        processData(i, current);
      }
    }
  });
}

// race
Promise.race =  function(values) {
  return new Promise((resolve, reject) => {
    for (let i=0; i<values.length; i++) {
      let current = values[i];
      // 判断当前项是promise还是普通值
      let then = current.then;
      if (then && typeof then === 'function') {
        current.then(y=>{
          resolve(y);
        }, reject);
      } else { // 普通值
        resolve(current);
      }
    }
  });
}

module.exports = Promise;