// 实现一个方法，可以给obj所有的属性添加动态绑定事件，当属性值发生变化时会触发事件

/*
let obj = {
    key_1: 1,
    key_2: 2
};
function func(key) {
    console.log(key + ' 的值发生改变：' + this[key]);
}
bindData(obj, func);
obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"
*/

let obj = {
	key_1: 1,
	key_2: 2
}

function func(key) {
	console.log(key + ' 的值发生改变：' + this[key]);
}

function defineVueActive(key, val, obj, func) {
	Object.defineProperty(obj, key, {
		get () {
			return val
		},
		set (newVal) {
			if (newVal !== val) {
                val = newVal
                func.call(this, key)
			}
		}
    })
}
function bindData(obj, func) {
	for (let i in obj) {
		defineVueActive(i, obj[i], obj, func)
	}
}

bindData(obj, func)

obj.key_1 = 2