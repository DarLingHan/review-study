// generator 生成器 -》 iterator迭代器;next{value. done}


// 迭代器
// let obj = {0:1, 1:2, 2:3, length: 3, [Symbol.iterator]: function() {
//   let self = this;
//   let index = 0;
//   return {
//     next() {
//       return {
//         value: self[index],
//         done: index++ == self.length
//       }
//     }
//   }
// }};

// 用生成器生成迭代器
let obj = {0:1, 1:2, 2:3, length: 3, [Symbol.iterator]: function *() {
  let index = 0;
  while(index != this.length) {
    yield this[index++];
  }
}};

// from也可以转换成类数组
// console.log(Array.from({0:1,1:2,2:3, length:3}))
// 类数组 有索引、长度、迭代器iterator -> 展开转成数组
function fn () {
  // arguments
  // let r = [...arguments];
  let r = [...obj];
  console.log(r);
  console.log(Array.isArray(r));
}
fn(1, 2, 3);