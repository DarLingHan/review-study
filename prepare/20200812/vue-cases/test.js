function parse(url) {
    let obj = {}
    let res = url.split('?')[1].split('&')
    for(let item of res) {
        let key = item.split('=')[0]
        let val = decodeURI(item.split('=')[1],"UTF-8")
        if (!val) {val = true}
        if (obj.hasOwnProperty(key)) {
            obj[key] = [obj[key], val]
            obj[key] = flat(obj[key])
        } else {
            obj[key] = val
        }
    }
    return obj
}
const flat = arr => {
    return arr.reduce((pre, curr) => {
        return [...pre, ...(Array.isArray(curr) ? flat(curr) : [curr])]
    }, [])
}

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=333&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parse(url))