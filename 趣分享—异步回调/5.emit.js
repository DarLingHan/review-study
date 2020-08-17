// 发布订阅的设计模式
// 订阅 -> 守护的池子_arr(发布的时候需要做什么事情 fn)
// 发布 -> 去池子里找这些订阅者_arr，然后做该做的事 fn() 发布就是把订阅的事情做一次

let fs = require('fs');

// 并行的处理方式
function EventEmitter() {
  this._arr = [];
};
EventEmitter.prototype.on = function (callback) { // 订阅的方法
  this._arr.push(callback);
};
EventEmitter.prototype.emit = function (key, val) { // 发布的方法 发布的时候，得让订阅的事情做一次
  // 让on方法里面的_arr遍历执行一次
  this._arr.forEach(fn => fn(key, val));
};

// 订阅
let ev = new EventEmitter();
let results = {};
ev.on((key, val)=> {
  // 等会发布的时候做具体的事情
  // console.log(key, val)
  results[key] = val;
  if (Object.keys(results).length === 2) {
    console.log(results);
  }
});

// 发布
fs.readFile('name.txt', 'utf8', (err, data) => {
  if(err) return err;
  // console.log(data);
  ev.emit('name', data); // 发布
});
fs.readFile('age.txt', 'utf8', (err, data) => {
  if(err) return err;
  // console.log(data);
  ev.emit('age', data); // 发布
});