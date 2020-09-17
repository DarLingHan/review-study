## 设计模式分为三大类
- 1. 结构型模式：识别系统中组件间的简单关系来简化系统的设计
- 2. 创建型模型：处理对象的创建，结合实际情况采用合适的方式创建对象
- 3. 行为型模型： 用于识别对象之间常见的交互模式并加以实现
https://www.cnblogs.com/cmqj/p/13666823.html

## 1. 工厂模式——创建型模型
提供一个具体函数来实现具体创建对象的细节
```js
function createPerson(name, age, job) {
    var obj = {
        name,
        age,
        job,
        sayName: function () {
            console.log(this.name)
        }
    }
    return obj
}

var person1 = createPerson('han', '18', 'front end')
var person2 = createPerson('ling', '20', 'front end')
```

## 2.单列模式——创建型模型
系统中只保存一个实例，相当于定义了一个全局变量。
- 隐藏Class的构造函数，避免多次实例化
- 通过暴露一个 getInstance() 方法来创建/获取唯一实例
```js
const Singleton = (function() {
    // 隐藏构造函数
    function FooService() {}
    // 未初始化的单列对象
    let fooService
    return {
        getInstance: function() {
            if (!fooService) {
                fooService = new FooService()
            }
            return fooService
        }
    }
})()

```

## 3.观察者模式/发布订阅模式——行为型模型

## 4.迭代器模式——行为型模型
提供一致的遍历各种数据结构的方式，而不用了解数据的内部结构
提供遍历容器（集合）的能力而无需改变容器的接口

## 5.命令模式
将函数的调用、请求和操作封装成一个单一的对象

## 6.职责链模式
大的函数分割成一个个小函数，清晰，各司其职。

