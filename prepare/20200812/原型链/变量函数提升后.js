function Foo () {
    getName = function () { console.log(1); }
    return this;
}
function getName () { console.log(5); }
var getName = undefined;
Foo.getName = function () { console.log(2); }
Foo.prototype.getName = function () {console.log(3);}
getName = function () { console.log(4); }


/* 写出输出 */
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();











// 答案:

2
4
1
1
2
3

