"use strict";
// TypeScript函数
exports.__esModule = true;
// 剩余参数
function buildName(firstName) {
    var restNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNames[_i - 1] = arguments[_i];
    }
    return firstName + " " + restNames.join(" ");
}
console.log(buildName('han', 'ling', 'zhu', 'qian', 'luo', 'yang'));
// 匿名函数 函数表达式
var res = function () {
    return 'hello world';
};
console.log(res());
// 匿名函数自调用
(function () {
    console.log('匿名函数自调用');
})();
// 构造函数
var myFunction = new Function('a', 'b', 'return a*b');
console.log(myFunction(3, 4));
// 递归函数
// 箭头函数
console.log('递归函数，箭头函数');
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp('abc');
disp(1, 'xyz');
