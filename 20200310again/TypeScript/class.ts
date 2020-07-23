// 类描述了所创建的对象的共同的属性和方法
class Car {
    // 字段
    engine: string;
    // 构造函数
    constructor(engine: string) {
        this.engine = engine
    }
    // 方法
    disp(): void {
        console.log('类的方法中显示发动机的型号为：'+this.engine)
    }
}
// 创建一个对象
var obj = new Car('XIUJ0089');
console.log(obj.disp());

// 类的继承
// 子类不能继承父类的私有成员（方法和属性）、构造函数
// TypeScipt一次只能继承一个类，但支持多重继承（A继承B，B继承C）
class Father {
    area: number;
    constructor(a: number) {
        this.area = a
    }
}
class Child extends Father {
    disp(): void {
        console.log('面积：'+this.area)
    }
}
var val = new Child(123)
console.log(val.disp())

// 多重继承
class Root {
    str:string
}
class Ch extends Root {}
class Leaf extends Ch {}
var objLeaf = new Leaf()
objLeaf.str = '多重继承'
console.log(objLeaf.str)

// 类的继承 方法的重写
class PrinterClass {
    doPrint(): void {
        console.log('父类的doPrint方法')
    }
}
class ChildPrinterClass extends PrinterClass {
    doPrint(): void {
        super.doPrint() // super关键字可以直接引用父类的属性和方法
        console.log('子类重写父类的doPrint方法')
    }
}
console.log(new ChildPrinterClass().doPrint())

// static 关键字 静态属性和方法 可以直接通过类名调用
class StaticMem {
    static num: number;
    static disp(): void {
        console.log('num的值为：', this.num)
    }
}
StaticMem.num = 12
console.log(StaticMem.disp())

// instanceof运算符
// 用于判断对象是否是指定的类型
class Person {}
var objPerson = new Person()
// var isPerson = objPerson instanceof Person
console.log('objPerson对象是Person类实例化来的吗?'+(objPerson instanceof Person))

// 访问控制修饰符
// public 公有的
// protected 受保护的
// private 私有的
class Encapsulate {
    str1: string = 'hellow'
    private str2:string = 'world'
}
console.log(new Encapsulate().str1)

// 类和接口
// 类可以实现接口 implements
interface ILoan {
    interest: number
}
class AgriLoan implements ILoan {
    interest: number
    rebate: number
    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}
var objAgi = new AgriLoan(10, 1);
console.log(objAgi.interest+'--'+objAgi.rebate)


export {}