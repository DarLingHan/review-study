// 插入排序
const insertSort = (arr) => {
    const sorted = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let isInsert = false;
        for (let j = 0; j < sorted.length; j++) {
            if (arr[i] <= sorted[j]) {
               sorted.splice(j, 0, arr[i])
               isInsert = true;
               break;
            }
        }
        !isInsert && sorted.push(arr[i]);
    }
    return sorted;
}

let arr = [1,3,10,9,2,6,7,4,5]
console.log(insertSort(arr))
