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

## class静态方法和非静态方法的区别
- 1. 静态方法用static关键字修饰，在类定义的时候已经被装载和分配。
    而非静态方法在类定义时没有占用内存，只有在类被实例化成对象时，对象调用该方法才被分配内存。
- 2. 静态方法只能调用静态成员和方法，不能调用非静态成员和非静态方法。而非静态方法没有这个限制。