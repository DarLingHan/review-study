let a = require('./a1')

setTimeout(() => {
    console.log('require复制_a的值不变化', a)
}, 2000);