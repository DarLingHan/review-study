let arr = [1,3,10,9,2,6,7,4,5]
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=0; j< arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

function quickSort(arr) {
    if (arr.length === 0) {return []}
    if (arr.length === 1) {return arr}
    let index = arr[0]
    let left = []
    let right = []
    arr.forEach(item => {
        item < index && left.push(item)
        item > index && right.push(item)
    });
    return [...quickSort(left), index, ...quickSort(right)]
}

function insertSort(arr) {
    let sorted = [arr[0]]
    for (let i = 1; i< arr.length; i++) {
        let isInsert = false
        for (let j=0; j<sorted.length; j++) {
            if (arr[i] <= sorted[j]) {
                sorted.splice(j, 0, arr[i])
                isInsert = true
                break
            }
        }
        !isInsert && sorted.push(arr[i])
    }
    return sorted
}

function selectSort(arr) {
    if (arr.length === 0) {return []}
    let min = 0
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i
        }
    }
    return [arr.splice(min, 1)[0], ...selectSort(arr)]
}

// console.log(bubbleSort(arr))
// console.log(quickSort(arr))
// console.log(insertSort(arr))
console.log(selectSort(arr))

