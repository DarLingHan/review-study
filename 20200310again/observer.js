// 被观察者
class Subject {
    constructor() {
        this.state = '单身'
        this.arr = []
    }
    attach (observer) {
        this.arr.push(observer)
    }
    setState (state) {
        this.state = state
        this.arr.forEach(observer => observer.update(state))
    }
}
// 观察者
class Observer {
    constructor (name) {
        this.name = name
    }
    update (state) {
        console.log(`${this.name}知道她${state}`)
    }
}

let father = new Observer('爸爸')
let mother = new Observer('妈妈')
let subject = new Subject()
subject.attach(father)
subject.attach(mother)

// 改变被观察者的状态
subject.setState('分手了')

