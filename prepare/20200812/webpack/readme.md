## 抽象语法树AST
- 源代码的树状表现形式
- 树上的每个节点代表源代码中的一种数据结构
- 抽象语法树是一个对象
    type： 该语句类型
    body: [
        {} // 包含对语句的描述信息
    ]

## tree-shaking
- 官方文档举的一个例子 摇掉树上那些枯死的叶子
- 去掉无用的代码，没有执行的代码
- mode: 'production' 默认开启
- mode: 'development',
    optimization: {
        usedExports: true,
    }
- 副作用，package.json中的sideEffects

## webpack按需加载原理
不同文件中多次import同一个文件，webpack并不会多次打包，只会在打包后的文件中会多次引用打包后的该文件对应的函数。
- 1. import打包后缓存webpack_require.e语句
- 2. 定义一个promise数组
    如果已加载过，返回一个空数组的promise.all()
    如果正在加载，返回存储过的此文件对应的promise
    如果未加载过，定义一个promise，然后创建script标签，加载此js，并定义成功或失败的回调。
     script标签的src属性就是我们按需加载的文件，webpack会对这个script标签监听error和load事件，从而做相应的处理。
     返回一个promise，存储到installedChunks中
- 3. 每次加载完一个文件，就会执行全局的webpackJsonp数组的push方法
    执行js对应的promise的resolve方法




## webpack之loader执行顺序及原理
从右往左，从下往上

因为webpack选择了compose组合函数的思想

函数组合，就是将分解的简单任务组合成复杂任务的过程
组件的概念就是把一些通用的功能或元素组合成可重用的组件，就算不通用，也可以拆分成一个个具有简单功能的组件，然后再组合成满足各种需求的页面。

组合函数的概念，就是不改变原有函数的功能，而是把功能拆分成一个个小的单一的函数，组合这些小的函数实现最终的功能。