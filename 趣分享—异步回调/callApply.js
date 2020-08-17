// 题外拓展
// apply (新this对象,参数数组)
// call (新this对象,参数,参数,参数...)
// apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。
// call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。
// apply的一些其他巧妙用法
// 求数组中的最大项
var arr = [1,3,5,7,8,4,9];
var max = Math.max.apply(null, arr);
console.log(max);
// 求数组中的最小项
var min = Math.min.apply(null, arr);
console.log(min);
// 合并两个数组并返回新数组长度
var arr1 = new Array('1', '3', '5');
var arr2 = new Array('2', '4', '6');
console.log(Array.prototype.push.apply(arr1, arr2));