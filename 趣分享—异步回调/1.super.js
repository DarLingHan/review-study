function fn() {
  return function() {
    return 1;
  }
}

let result = fn(); // 函数执行的返回值是一个函数
console.log(result);
console.log(result());