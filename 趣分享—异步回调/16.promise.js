let Promise = require('./promise/promise3');
let fs = require('fs');
// function read(url) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, 'utf-8', (err, data) => {
//       if (err) return reject(err);
//       return resolve(data);
//     });
//   });
// }

// // all
// Promise.all([read('./name.txt'), read('age.txt'), 1, 2]).then(data => {
//   console.log(data);
// });
// // 一个成功就会成功
// Promise.race([read('./name.txt'), read('age.txt'), 1, 2]).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log('err', err);
// });

// promise化 -》promisfy
function promisify(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn(...arguments, (err, data) => {
        if (err) reject(err);
        resolve(data);
      })
    });
  }
}
let read = promisify(fs.readFile);
let write = promisify(fs.writeFile);
write('./name.txt', 'hanlingQC');

Promise.all([read('./name.txt'), read('age.txt'), 1, 2]).then(data => {
  console.log(data);
});

// Promise.all([write('./name.txt'), read('age.txt'), 1, 2]).then(data => {
//   console.log(data);
// });