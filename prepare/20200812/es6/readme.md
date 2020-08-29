## let var区别
1. var会有变量提升,let没有
2. var可以被重写，let不行
3. var定义的变量被定义在window上，let不是放在window上
4. 作用域的问题（全局作用域、函数作用域)var没有作用域
    example1
    暂存性死区
``` JavaScript
    let a = 1
    {
        console.log(a)
        let a =2
    }
```
``` JavaScript
    for (let i=0;i< 3; i++) {
        console.log(i)
    }
    for (var i=0;i< 3; i++) {
        console.log(i)
    }
```