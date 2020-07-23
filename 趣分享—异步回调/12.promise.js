let Promise = require('./promise/promise3');
let fs = require('fs');

function read(url) {
  let defer = Promise.deferred(); // 延迟对象
  fs.readFile(url, 'utf-8', (err, data) => {
    if (err) defer.reject(err);
    defer.resolve(data);
  });
  return defer.promise;
}
read('name.txt').then(data => {
  console.log(data);
  return read(data);
}).then(data => {
  console.log(data);
});