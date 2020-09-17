let arr = [1,3,10,9,2,6,7,4,5]
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=1 + i; j< arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

function selectSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let res = []
    let min = 0
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    res.push(arr.splice(min, 1)[0])
    return [...res, ...selectSort(arr)]
}

function quickSort (arr) {
    if (arr.length === 0) {
        return []
    }
    let count = arr[0]
    let left = []
    let right = []
    for (let i=0; i<arr.length; i++) {
        if(arr[i] < count) {
            left.push(arr[i])
        }
        if(arr[i] > count) {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), count, ...quickSort(right)]
}

function insertSort(arr) {
    let sortArr = [arr[0]]
    for (let i = 1; i<arr.length; i++) {
        let flag = false
        for (let j=0; j<sortArr.length; j++) {
            if (arr[i] <= sortArr[j]) {
                flag = true
                sortArr.splice(j, 0, arr[i])
                break
            }
        }
        !flag && sortArr.push(arr[i])
    }
    return sortArr
}
// console.log(bubbleSort(arr))
// console.log(selectSort(arr))
// console.log(quickSort(arr))
console.log(insertSort(arr))