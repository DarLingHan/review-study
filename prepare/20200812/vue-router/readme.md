## hash 和 history的区别
- hash变化，会在浏览器里生成记录，所以前进后退可以用。
- hash的背后是`onhashchange`事件，可以在window对象上监听这个事件。
- 改变hash不会重新加载页面

- history，利用HTML5 History Interface中新增的pushState() 和 replaceState()方法，对浏览器历史记录进行操作。
- back、forward、go

hash向后端发送请求只会发送#前面对部分，所以没有做的路由全覆盖，也不会返回404；但是history必须一致。
hash设置的新值与旧值不一样才会放到历史记录栈中；history的pushstate就算一致也会再新增一条记录。

## 为了构建单页应用SPA，需要引入前端路由系统，这就是Vue-router的由来
