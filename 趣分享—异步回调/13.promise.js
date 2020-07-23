let Promise = require('./promise/promise3');

let promise = new Promise((resolve, reject) => {
  reject(100);
});

promise.then(null, err => {
  throw err;
}).catch(err => {
  console.log('error', err);
})