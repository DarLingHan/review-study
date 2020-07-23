// generator 生成器生成的是迭代器 配合yield来使用的 yield暂停
// function* fn()
// function * fn()
function *fn() {
  let a = yield 1;
  console.log(a);
  let b = yield 2;
  console.log(b);
  yield 2;
}

let it = fn(); // it 迭代器 有next()方法
console.log(it.next());
console.log(it.next(10));
console.log(it.next(20));