let Promise = require('./promise/promise3');
let promise = new Promise((resolve, reject) => {
  resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  }));
});

promise.then(data => {
  console.log(data);
}, err => {
  console.log(err);
})