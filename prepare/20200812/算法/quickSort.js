// 快速排序 nlog2n
const quickSort = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    if (arr.length === 1) {
        return arr;
    }
    const left = [];
    const right = [];
    let mid = arr[0];
    arr.map(item => {
        item > mid && right.push(item);
        item < mid && left.push(item);
        return item;
    })
    return [...quickSort(left), mid, ...quickSort(right)];
}

console.log(quickSort([1,3,10,9,2,6,7,4,5]))
