// generator+co = async await
// 将异步以同步的写法表现出来
// async函数返回的是一个promise
// 一个语法糖

/**
 * 1.callback 请求并发 不好管理 链式调用又导致嵌套太多
 * 2.promise 优雅的处理异步，处理错误，但是还是基于回调的，还是有嵌套的问题
 * 3. async-await 让代码像同步一样执行
 */