function Foo () {
    getName = function () { console.log(1); }
    return this;
}
function getName () { console.log(5); }
var getName = undefined;
Foo.getName = function () { console.log(2); }
Foo.prototype.getName = function () {console.log(3);}
getName = function () { console.log(4); }

2
4
1
1
2
3

