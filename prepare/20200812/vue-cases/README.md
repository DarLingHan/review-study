## 小胡子语法
{{msg}} 可以取值、运算、输出、三元，不能写js语法

## 声明式 要使用vue的数据 需要在data里先声明

## vue使用中遇到的问题
- 1. 在created钩子函数中进行的DOM操作，发现不起作用。
    这就要了解vue的生命周期：由于created钩子函数还未对DOM进行渲染，所以无法直接操作，就需要通过nextTick()来完成。
    
- 2. 当数据发生变更时，立即操作真实的dom获取data属性值，发现并没有更新。
    因为dom更新是异步的，vue当数据变化时会开启一个`异步更新队列`，只有当所有的数据发生变化完成后，再统一更新。
    Vue在更新DOM是异步执行的，只要侦听到数据变化，vue将开启一个队列，并缓冲同一事件循环中发生的所有数据变更。如果同一个watcher被多次触发，只会被推入到队列中一次。
    这种在缓冲时去除重复数据对于不必要到计算和DOM操作是非常重要的。
    Vue在内部对异步队列尝试使用原生的`Promise`、`MutationObserver`和`setImmediate`，如果执行环境不支持，则会采用`setTimeOut(fn, 0)`

- 3. 当我们通过数组下标去改变数组的值时，视图并没有更新。
    后来查询vue的官方，发现提供了两种方法$set和splice方法。
    后来查阅资料发现，因为监听数据的变化，底层是使用了监听obj的defineProperty方法，它只能监听对象的变化，不能监听到数组，后来vue重写了数组的splice方法，在这个方法里触发视图的更新。
- 4. 修改element-ui的组件样式时

## 计算属性缓存VS方法
- 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生变化时它们才会重新求值。
    这意味着相关的依赖属性没有发生变化时，多次访问计算属性会立即返回之前的计算结果，而不会再次执行函数。
- 每当重新触发渲染时，调用的方法总会再次执行函数

如果一个性能较大的计算属性A，它需要遍历巨大的数组并做大量计算，那么可能其他属性依赖于这个A，如果没有缓存，我们不可避免的要执行A多次，非常的耗性能。

## 计算属性VS侦听属性
- 当监听多个数据的变化而更新某个数据时，不如使用computed属性
    比如watch a,wacth b 中都更改c,就会导致watch滥用
    不如直接computed c
- 当需要监听数据变化时执行异步操作或开销更大的操作时，选择watch。
    当监听到数据变化时，执行异步操作，再最终得到结果前设置中间状态，这都是计算属性无法做到的。

## vue小胡子语法 && api
- vm.$el 当前元素
- vm.$data 当前数据对象
- vm.$set 添加一个新数据，实现数据劫持
- vm.$watch 监听数据的变化
- vm.$options 所有的选项信息
- vm.$nextTick 异步执行 操作dom必备
- vm.$mount 挂载

## vue指令
- v-for
- v-bind
- template
- v-if/v-show
- v-on绑定事件，简写`@`
- v-once 只渲染一次，渲染后产生缓存，下次直接从缓存里取

## domdiff
- key要加给真实的dom
- 伪代码 当数据顺序变化时，如果用index作为索引就要重新渲染，但是key值唯一不变化，其实只要调整顺序就可以
```
    <li 0> 香蕉 </li>   <li 0> 橘子 </li>
    <li 1> 苹果 </li>   <li 1> 苹果 </li>
    <li 2> 橘子 </li>   <li 0> 香蕉 </li>

    0索引相同，内容发生了变化，重新渲染

    <li x> 香蕉 </li>   <li z> 橘子 </li>
    <li y> 苹果 </li>   <li y> 苹果 </li>
    <li z> 橘子 </li>   <li x> 香蕉 </li>

    z内容没有发生变化，只是顺序调整一下，不用重新渲染。
```

## 生命周期
每个Vue实列创建经过的初始化过程——设置数据监听、编译模版、实例挂载到dom上并在数据变化时更新dom.
在这个过程中——生命周期钩子函数

    初始化一系列的属性 初始化生命周期
- beforeCreate
    数据添加监听事件
- created
    编译模版——》ast抽象语法树——》返回render函数
- beforeMount
    render函数——》diff算法——》patch后 最终的 虚拟dom
    new watcher() 实例 插入before函数也就是在更新组件之前先执行 beforeUpdate钩子函数
- mounted
    虚拟node转化成真实dom
- beforeUpdate
    这时候新的虚拟dom有了，真实dom还未更新
- updated
    更新了真实dom
- beforeDestory
    实例销毁之前，实例的所有属性方法还是可用的
- destory
    实例销毁，所有的属性，方法，子实例都解绑销毁

## Vue异步更新原理
- 修改data的值，触发data的set
- set调用dep的notify 通知相关的watcher进行更新（调用update方法）
- 将当前watcher放到异步队列中 执行异步队列并传入回调
- 在异步队列的回调中，对Queue中的Watcher进行排序，然后执行对应的DOM更新。

## 依赖收集的过程
发生在beforeMount和mounted之间
new Wacher(vm, updateComponent, noop)时会触发updateComponent方法
这个方法做了 compile——>template——>AST——>Render Function——>Vnode——>patch——>真实dom的过程
在这个过程中获取数据的时候就会获取到之前数据劫持的get方法，在这个get方法过程中就将当前的watcher放到依赖收集deps里去。
当数据发生变更时，会触发数据劫持中的set方法，set方法会notify这些相关的watcher去update,最终实现视图的更新。


# Vue的事件机制
是通过事件队列来调度执行的。
会等主进程空闲后进行调度。
会等所有进程完成之后，再一次更新。

保证dom操作是再当前任务完成后等下一个tick操作，或者说是当前tick的微任务阶段操作。

