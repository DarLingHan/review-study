"use strict";
// 接口
// 抽象方法的集合
// 实现游具体的类执行具体的方法
exports.__esModule = true;
var customer = {
    firstName: 'han',
    lastName: 'ling',
    sayHi: function () {
        return 'fighting!';
    }
};
console.log('Customer对象');
console.log(customer.firstName + customer.lastName + customer.sayHi());
var employee = {
    firstName: 'zhu',
    lastName: 'de',
    sayHi: function () {
        return 'yes';
    }
};
console.log('Employee对象');
console.log(employee.firstName + employee.lastName + employee.sayHi());
var list = ['a', 'b', 'c'];
console.log(list);
var ages;
ages['han'] = 25;
ages['zhu'] = 26;
console.log(ages); // ???编译后报错
var obj = {
    v1: 1,
    v2: 2
};
console.log(obj);
