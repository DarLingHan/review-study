/* 预期结果
parse
尽可能的全面正确的解析一个任意 url 的所有参数为 Object，注意边界条件的处理。
*/


```javascript

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parse(url)

```
/* 预期结果

{
  user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}

*/
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