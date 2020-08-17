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
  // yield [1+Number(age)];
  return age;
}

// co
// let co = require('co');

function co(it) {
  return new Promise((resolve, reject) => {
    function next(val) {
      let {value, done} = it.next(val);
      if (done) {
        return resolve(value);
      }
      Promise.resolve(value).then(data => {
        next(data);
      }, reject);
    }
    next();
  });
}

co(read()).then(data => {
  console.log(data);
});