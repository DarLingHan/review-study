// 数组打平
// const flat = arr => {
//     return arr.reduce((pre, curr) => {
//         return [...pre, ...(Array.isArray(curr) ? flat(curr) : [curr])]
//     }, [])
// }

// console.log(flat([1, 3, 5, [3, 4], [3, [84389]]]));

function arrs (arr) {
    let res = []
    arr.map(item => {
        if (Array.isArray(item)) {
            res = res.concat(arrs(item))
        } else {
            res.push(item)
        }
    })
    return res
}

// console.log(arrs([1, 3, 5, [3, 4], [3, [84389]]]))

// console.log([1, 2, [3, 4]].flat())