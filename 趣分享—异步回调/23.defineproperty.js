let obj = {
    other: '',
    get name () {
        console.log('正在读取');
        return this.other
    },
    set name (val) {
        console.log('正在设置');
        this.other = val
    }
}
obj.name = 'uui';
console.log(obj.name);