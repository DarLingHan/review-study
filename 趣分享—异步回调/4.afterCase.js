// 并发的去调用接口
// 两个ajax ajax1->name.txt ajax2->age.txt => name+age
let fs = require('fs'); //fileSystem

// 自己封装after
function after(times, callback) {
  let results = {};
  return function (key, val) {
    results[key] = val;
    if(--times === 0) {
      callback(results);
    }
  }
};
let newFn = after(2, function(results) {
  console.log(results);
});
fs.readFile('./name.txt', 'utf8', (err, data) => {
  if (err) return err;
  // console.log(data);
  newFn('name', data);
});
fs.readFile('./age.txt', 'utf8', (err, data) => {
  if (err) return err;
  // console.log(data);
  newFn('age', data);
});

// 串行 两个人有关系 上一个输出是下一个的输入
// 并行 两个人没有关系 可以一起执行