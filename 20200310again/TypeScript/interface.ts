// 接口
// 抽象方法的集合
// 实现游具体的类执行具体的方法

interface IPerson {
    firstName: string,
    lastName: string,
    sayHi: ()=> {}
}

var customer:IPerson = {
    firstName: 'han',
    lastName: 'ling',
    sayHi: ():string => {
        return 'fighting!'
    }
}

console.log('Customer对象');
console.log(customer.firstName+customer.lastName+customer.sayHi());

var employee:IPerson = {
    firstName: 'zhu',
    lastName: 'de',
    sayHi: ():string => {
        return 'yes'
    }
}

console.log('Employee对象')
console.log(employee.firstName+employee.lastName+employee.sayHi())

// 接口和数组
interface namelist {
    [index:number]:string
}
var list:namelist = ['a', 'b', 'c']
console.log(list)

interface agelist {
    [index:string]:number
}
var ages:agelist;
ages['han'] = 25;
ages['zhu'] = 26;
console.log(ages); // ???编译后报错

// 接口继承
// 可以多接口继承
interface IParent1 {
    v1:number
}
interface IParent2 {
    v2:number
}
interface Child extends IParent1, IParent2 {}
var obj:Child = {
    v1: 1,
    v2: 2
}
console.log(obj)

export {}