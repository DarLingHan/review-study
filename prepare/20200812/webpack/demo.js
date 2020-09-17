// https://juejin.im/post/6844903910834962446
// 实现一个compose函数
function compose(...fns) {
    return function (x) {
        // 从右往左的思想
        // compose(f,g,m,n)(x) === f(g(m(n(x))))
        return fns.reduceRight((arg, fn) => {
            return fn(arg)
        }, x)
    }
}

