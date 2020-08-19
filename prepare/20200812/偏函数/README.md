## 柯里化
- 只传递给函数一个参数调用它，返回一个函数处理剩下的参数
- 把接受多个参数的函数转换成接受单一参数的函数，并且返回一个函数，这个函数接受余下的参数和返回结果。

``` javacript
function add(x, y) {
    console.log()
}

add(3, 4)

function add(x) {
    return function (y) {
        return x + y
    }
}

add(3)(4)
```
- javascript闭包的特性，是我们将函数柯里化的基础
- 柯里化具有延迟计算、参数复用、动态生成函数的作用