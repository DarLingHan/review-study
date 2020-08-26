// const selectSort = (arr) => {
//     const sorted = [];
//     const rest = arr.slice(0);
//     for (let i = 0; i < arr.length; i++) {
//         let min = 0;
//         for (let j = 0; j < rest.length; j++) {
//             if (rest[j] < rest[min]) {
//                 min = j;
//             }
//         }
//         sorted.push(rest.splice(min, 1)[0]);
//     }
//     return sorted;
// }


const selectSort = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[min]) {
            min = i;
        }
    }
    result = arr.splice(min, 1)[0]
    return [result, ...selectSort(arr)];
}

let arr = [1,3,10,9,2,6,7,4,5]
console.log(selectSort(arr))