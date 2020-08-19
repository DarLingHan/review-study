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