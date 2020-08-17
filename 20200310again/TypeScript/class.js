"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 类描述了所创建的对象的共同的属性和方法
var Car = /** @class */ (function () {
    // 构造函数
    function Car(engine) {
        this.engine = engine;
    }
    // 方法
    Car.prototype.disp = function () {
        console.log('类的方法中显示发动机的型号为：' + this.engine);
    };
    return Car;
}());
// 创建一个对象
var obj = new Car('XIUJ0089');
console.log(obj.disp());
// 类的继承
// 子类不能继承父类的私有成员（方法和属性）、构造函数
// TypeScipt一次只能继承一个类，但支持多重继承（A继承B，B继承C）
var Father = /** @class */ (function () {
    function Father(a) {
        this.area = a;
    }
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.disp = function () {
        console.log('面积：' + this.area);
    };
    return Child;
}(Father));
var val = new Child(123);
console.log(val.disp());
// 多重继承
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Ch = /** @class */ (function (_super) {
    __extends(Ch, _super);
    function Ch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ch;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Ch));
var objLeaf = new Leaf();
objLeaf.str = '多重继承';
console.log(objLeaf.str);
// 类的继承 方法的重写
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log('父类的doPrint方法');
    };
    return PrinterClass;
}());
var ChildPrinterClass = /** @class */ (function (_super) {
    __extends(ChildPrinterClass, _super);
    function ChildPrinterClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildPrinterClass.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this); // super关键字可以直接引用父类的属性和方法
        console.log('子类重写父类的doPrint方法');
    };
    return ChildPrinterClass;
}(PrinterClass));
console.log(new ChildPrinterClass().doPrint());
// static 关键字 静态属性和方法 可以直接通过类名调用
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log('num的值为：', this.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
console.log(StaticMem.disp());
// instanceof运算符
// 用于判断对象是否是指定的类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var objPerson = new Person();
// var isPerson = objPerson instanceof Person
console.log('objPerson对象是Person类实例化来的吗?' + (objPerson instanceof Person));
