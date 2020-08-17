let Promise = require('./promise/promise3');
// let promise = new Promise((resolve, reject) => {
//   resolve(200);
// });

// promise.then(data => {
//   console.log(data);
// }, err => {
//   console.log(err);
// })

// Promise.resolve(200) 返回promise实例
Promise.resolve(200).then(data => {
  console.log(data);
})
Promise.reject(300).catch(err => {
  console.log(err);
})