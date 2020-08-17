// promise 承诺
// 三种状态 默认状态: pending(等待) fullfilled(成功) rejected(失败)
// promise一旦成功就不能失败，一旦失败就不能成功
// 执行器同步执行，但是then是异步的
// 执行器一旦运行报错，就会走reject
// let exector = (resolve, reject) => {}; // 执行器
// 引入自己定义的Promise
let Promise = require('./promise/promise1.js');
// let Promise = require('./test.js');
let promise = new Promise((resolve, reject) => { // 执行器
  // console.log(1);
  // 等待态
  // resolve(100); // 成功态
  // reject(200); // 失败态
  // throw new Error('错了。。。');
  setTimeout(() => {
    resolve(100);
  }, 1000);
});
// console.log(4);
promise.then(data => {
  console.log(3);
  console.log('success', data);
}, err=> {
  console.log('error...', err);
});
// console.log(2);