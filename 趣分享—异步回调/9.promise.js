// promise的链式调用
// let Promise = require('./promise/promise2');
let Promise = require('./test2.js');
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123);
  }, 1000);
});

promise.then(data => {
  console.log('1success', data);
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}, err => {
  console.log('1error', err);
}).then(data => {
  console.log('2success', data);
}, err => {
  console.log('2error', err);
});

// let promise2 = new Promise((resolve, reject) => {
//   resolve();
// });
// let promise3 = promise2.then((data) => {
//   return promise3;
// });
// promise3.then(data => {

// }, err => {
//   console.log('error....', err);
// });