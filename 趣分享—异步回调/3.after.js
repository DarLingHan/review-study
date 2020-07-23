// lodash after debounce throttle
function after (times, callback) {
  // times 次数 callback具体做什么事
  return function() {
    if(--times === 0) {
      callback();
    }
  };
}

let newFn = after(3, function () {
  console.log('我要吃饭了');
});

newFn();
newFn();
newFn();