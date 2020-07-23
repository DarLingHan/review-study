class Father {
    constructor () {
        this.name = name
    }
    sayHi () {
        console.log(this.name)
    }
}

class Child1 extends Father {
    constructor (name) {
        super(name)
    }

    sayYes () {
        console.log('I am child')
    }
}

let fa = new Father('hanling');
var ch = new Child1('ai')
fa.sayHi();
ch.sayHi();
ch.sayYes();
