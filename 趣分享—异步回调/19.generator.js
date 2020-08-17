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

function *read() {
  let ageTxt = yield readFile('./name.txt', 'utf-8');
  let age = yield readFile(ageTxt, 'utf-8');
  yield 1+Number(age);
  return age;
}

let it = read();
let {value, done} = it.next();
value.then(data => {
  let {value, done} = it.next(data);
  console.log(value, done);
  value.then(data => {
    let {value, done} = it.next(data);
    Promise.resolve(value).then(data => {
      console.log(value, done);
    });
  });
});