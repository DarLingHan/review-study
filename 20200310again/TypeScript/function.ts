// TypeScript函数

// 剩余参数
function buildName(firstName: String, ...restNames: string[]): string {
    return firstName + " " + restNames.join(" ")
}
console.log(buildName('han', 'ling', 'zhu', 'qian', 'luo', 'yang'));

// 匿名函数 函数表达式
var res = function(): string {
    return 'hello world'
}
console.log(res());

// 匿名函数自调用
(function(): void {
    console.log('匿名函数自调用')
})()

// 构造函数
var myFunction = new Function('a', 'b', 'return a*b');
console.log(myFunction(3, 4));

// 递归函数
// 箭头函数
console.log('递归函数，箭头函数');

// 函数重载：方法名相同，但是参数不同（类型，顺序，个数），返回类型可以相同也可以不同。
function disp(s1: string):void;
function disp(n1: number, s1: string):void;
function disp(x: any, y?: any):void {
    console.log(x);
    console.log(y);
}
disp('abc');
disp(1, 'xyz')


export {}