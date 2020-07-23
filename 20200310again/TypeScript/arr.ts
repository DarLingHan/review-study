// 数组解构
var arr:number [] = [12, 13]
var [x, y] = arr
console.log(x)
console.log(y)

// 数组迭代
for (var j in arr) {
    console.log(arr[j])
}

// 多维数组
var arr_dimensions: number [][] = [ [1, 2, 3], [4, 5, 6] ]
console.log(arr_dimensions)
console.log(arr_dimensions[1][0])