## 懒加载是如何实现的？

监听事件 比如scroll,resize等去触发事件
利用intersectionObserver去监听

## vue中实现懒加载的方式
- 1. 
```js
    () => import('')
```
- 2. 
```js
    reslove => require([''], reslove)
```
