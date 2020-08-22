function Father () {
    this.name = 'han'
    this.age = 18
}
Father.prototype.hobbit = 'swim'

let test = new Father()
console.log(test)

console.log(test.hobbit)