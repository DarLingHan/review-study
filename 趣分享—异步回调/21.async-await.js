let fs = require('fs');
function promisify(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn(...arguments, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
}

let readFile = promisify(fs.readFile);

// async 函数执行后 返回的是一个promise
// 如果 try + catch 那么这个promise返回的就是真
async function read() {
  let ageTxt = await readFile('./name1.txt', 'utf-8');
  let age = await readFile(ageTxt, 'utf-8');
  return age;
  // try {
  // } catch(e) {
  //   console.log(e);
  // }
  // return undefined;
}
read().then(data => {
  console.log(data);
}).catch(err => {
  console.log('---', err);
});

// generator + co = async await