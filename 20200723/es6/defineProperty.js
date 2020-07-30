/**
 * ES5方法
 * 
 */

 let obj = {};
 let res = ''
 Object.defineProperty(obj, "name", {
     enumerable: true,
    //  value: 'han',
    //  writable: true,
     configurable: true,
     get () {
         console.log('正在获取')
         return res
     },
     set (val) {
         console.log('我已经更新了')
         res = val
     }
 })
 obj.name = 'ling'
//  delete obj.name
 console.log(obj.name)


 let obj2 = {
     res: '',
     get name () {
         console.log('获取')
         return this.res
     },
     set name (val) {
         console.log('设置')
         this.res = val
     }
 }

 obj2.name = 'hanling'
 console.log(obj2.name)
