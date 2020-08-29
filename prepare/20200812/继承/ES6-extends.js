class Father {
    constructor () {
        this.name = 'father'
    }
    fn () {
        console.log('method')
    }
}

class Child extends Father {
    constructor() {
        super()
    }
}

console.log(new Child().fn())