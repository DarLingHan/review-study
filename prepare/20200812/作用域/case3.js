// var a = 10
// var obj = {
//   a: 20,
//   say: function() {
//     console.log(this.a)
//   }
// }
// obj.say() // 20

var a = 10
var obj = {
  a: 20,
  say: function() {
    console.log(this.a)
  }
}

var say = obj.say // 此处先创建一个临时变量存放函数定义，然后单独调用
say() // 10
