// *****************************
// 面向切面的编程方式
// 面向对象
// 前端埋点 在Ajax的请求中包装自己的逻辑 ->应用场景
// 想在业务逻辑来穿插自己的逻辑 但又不影响现有业务逻辑
Function.prototype.before = function (callback) { // 高阶函数 参数是函数
  // ES5写法
  let self = this;
  return function () {
    callback();
    self.apply(self, arguments);
    // apply (新this对象,参数数组)
    // call (新this对象,参数,参数,参数...)
  };
  // ES6写法
  // return (val)=> { // 返回了一个函数
  //   callback(); // before要做的事情
  //   this(val);
  // };
}

function fn(val) {
  console.log('有一定的功能了', val);
}

let newFn = fn.before(() => {
  console.log('在函数执行之前执行这段话...');
});

newFn('迷妹1号!');