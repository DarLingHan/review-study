## 一切都是对象的理解
对象的特性就是拥有属性和方法
就算你在js中定义了一个Boolean类型的数据，它也有属性方法
另一方面从原型链上讲，除了null和undfined外都是继承自Object。

## 怎么样判断属性是实例上的属性
function isPrototypeAttr(obj,pro)
{
    return !obj.hasOwnProperty(pro) && (pro in obj)
}