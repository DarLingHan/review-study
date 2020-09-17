// 1.工厂模式
function createPerson(name, age, job) {
    var obj = {
        name,
        age,
        job,
        sayName: function () {
            console.log(this.name)
        }
    }
    return obj
}

var person1 = createPerson('han', '18', 'front end')
var person2 = createPerson('ling', '20', 'front end')

console.log(person1)
console.log(person2)

// 单列模式