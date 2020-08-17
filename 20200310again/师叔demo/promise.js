/*
1. firstPromise实现

 问题：业务需求中，经常有 只需要请求一次，以防止用户重复点击行为导致的触发重复请求
 传递 执行后返回promise的函数，返回一个新函数。
 保证连续触发时，传递的方法只执行一次，直到第一次的promise执行完成后，后续的调用才执行
*/

/**
* @param {function} promiseFunction
* promiseFunction 示例： () => fetch('data')
*/
function firstPromise (promiseFunction) {
    return (()=>{
        return promiseFunction;
    })()
  }
  
  
  // 示例
  let count = 1;
  let promiseFunction = () =>
    new Promise(rs =>
      window.setTimeout(() => {
        rs(count++);
      }, 300)
    );
  
  let firstFn = firstPromise(promiseFunction);
  
  firstFn().then(console.log); // 1
  firstFn().then(console.log); //
  firstFn().then(console.log); //