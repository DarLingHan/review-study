// fs readFile
// name.txt age.txt

let fs = require('fs');
// fs.readFile('name.txt', 'utf8', (err, data)=> {
//   if (err) return err;
//   fs.readFile(data, 'utf8', (err, data) => {
//     if (err) return err;
//     console.log(data);
//   });
// });

function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  });
}
// promise提供了链式调用
// then 方法执行的结果是一个promise,每次返回的promise都是一个新的promise
// 这个返回的promise不同于jquery里面的this
// 失败后可以成功 成功后可以失败
read('name.txt').then(data => {
  console.log(data);
  // return read(data);
  throw new Error('234');
}).then(data => {
  console.log(data);
}, err => {
  console.log('error', err);
  return 123;
}).then(data => {
  console.log('success', data);
});

// 链式调用 每次返回的都是一个新的promise 案例
let p = new Promise((resolve, reject) => {
  reject();
});
let p2 = p.then(null, err => {
  return 123456789;
});
p2.then(data => {
  console.log(data);
});